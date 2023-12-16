<script setup>
import { ref, onMounted } from 'vue';
import { collection, query, onSnapshot, getDoc, addDoc, deleteDoc, updateDoc, getDocs, doc } from "firebase/firestore";
import database from '../firebase';

const data = ref([]);
const db = database;
const newTodo = ref(null);

const fetchData = () => {
  try {
    const q = collection(db, 'ToDoList');
    onSnapshot(q, (querySnapshot) => {
      const ToDoList = [];
      querySnapshot.forEach((doc) => {
        const toDo = {
          id: doc.id,
          task: doc.data().task,
          status: doc.data().status
        };
        ToDoList.push(toDo);
      });
      data.value = ToDoList;
    });
  } catch (error) {
    console.error("Error fetching data", error);
  }
}

const addToDo = async () => {
  try {
     await addDoc(collection(db, 'ToDoList'), {
      task: newTodo.value,
      status: false,
    });

    newTodo.value = null;
  } catch (error) {
    console.error('Error adding document: ', error);
  }
};


const updateTask = async (id) => {
  try {
    const dataQuery = doc(db, 'ToDoList', id);
    const snapshot = await getDoc(dataQuery);

    if (snapshot.exists()) {
      const currentStatus = snapshot.data().status;
      const newStatus = !currentStatus;

      const newData = {
        status: newStatus,
      };

      await updateDoc(dataQuery, newData);
      console.log('Updated task record.');
    } else {
      console.log('Task not found.');
    }
  } catch (error) {
    console.error('Error updating task record:', error);
  }
};

const removeTask = (id) => {
  try {
    const querryData = doc(db, 'ToDoList', id);
    deleteDoc(querryData);
  } catch (error) {
    console.error("error deleting data", error);
  }
};

const clearAllTask = async () => {
  try {
    const collectionRef = collection(db, 'ToDoList');
    const querySnapshot = await getDocs(collectionRef);

    // Iterate through all documents in the collection and delete them
    querySnapshot.forEach(async (doc) => {
      await deleteDoc(doc.ref);
    });
  } catch (error) {
    console.error("error deleting data", error);
  }
};

onMounted(() => {
  fetchData();
});

</script>

<template>
  <section class="min-h-screen flex items-center justify-center bg-gray-100">

    <div class="bg-white p-8 shadow-md rounded-md w-96 h-[500px] overflow-y-auto">
      <h1 class="text-3xl text-gray-700 font-bold mb-4 uppercase flex justify-center text-center">To-Do <br> List</h1>

      <div class="mb-4">
        <input v-model="newTodo" type="text" class="mt-1 p-2 border border-gray-300 rounded w-full"
          placeholder="Add a new to-do" />
      </div>

      <div class="flex justify-between">
        <button @click="addToDo" class="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded">Add</button>
        <button @click="clearAllTask" class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">Clear All</button>
      </div>

      <ul class="mt-4">
        <li v-if="data.length > 0" v-for="toDo in data" :key="toDo.id">
          <div class="border-b p-2 flex justify-between">
            <p :class="toDo.status ? 'line-through' : ''">{{ toDo.task }}</p>
            <div class="flex gap-3 text-white">
              <button @click="updateTask(toDo.id)"
                class="bg-indigo-500 hover:bg-indigo-600 px-3 py-1 rounded">{{ toDo.status ? 'Undo' : 'Done' }}</button>
              <button @click="removeTask(toDo.id)" class="bg-red-500 hover:bg-red-600 px-2 py-1 rounded">Remove</button>
            </div>
          </div>
        </li>
        <li v-else>No Data Found</li>
      </ul>
    </div>

  </section>
</template>