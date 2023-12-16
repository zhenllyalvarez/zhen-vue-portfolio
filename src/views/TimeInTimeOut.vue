<script setup>
import database from "../firebase";
import {
  collection,
  query,
  onSnapshot,
  getDoc,
  addDoc,
  deleteDoc,
  updateDoc,
  getDocs,
  doc,
  where,
} from "firebase/firestore";
import { ref, onMounted } from "vue";

const data = ref([]);
const db = database;

const fetchData = () => {
  try {
    const q = collection(db, "TimeInTimeOut");
    onSnapshot(q, (querySnapshot) => {
      const timeList = [];
      querySnapshot.forEach((doc) => {
        const timeEvent = {
          id: doc.id,
          timeIn: formatTime(doc.data().timeIn),
          timeOut: formatTime(doc.data().timeOut),
        };
        timeList.push(timeEvent);
      });
      data.value = timeList;
    });
  } catch (error) {
    console.error("Error fetching data", error);
  }
};

const formatTime = (timestamp) => {
  if (timestamp && timestamp.toDate) {
    return timestamp.toDate().toLocaleString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  } else {
    return "N/A";
  }
};

const timeInEvent = async () => {
  try {
    // Check if there is an ongoing timeout or a time-in entry with 'N/A' in the "timeOut" field
    const ongoingTimeoutQuery = query(
      collection(db, "TimeInTimeOut"),
      where("timeOut", "==", "N/A")
    );
    const ongoingTimeoutSnapshot = await getDocs(ongoingTimeoutQuery);

    if (ongoingTimeoutSnapshot.size === 0) {
      const date = new Date();
      await addDoc(collection(db, "TimeInTimeOut"), {
        timeIn: date,
        timeOut: "N/A",
      });

      alert("New time-in entry added");
    } else {
      alert(
        "Cannot time-in when there is an ongoing timeout or a pending time-in"
      );
    }
  } catch (error) {
    console.error("Error during time-in: ", error);
  }
};

const updateTimeouts = async () => {
  try {
    const timeInOutCollection = collection(db, "TimeInTimeOut");
    const querySnapshot = await getDocs(timeInOutCollection);

    querySnapshot.forEach(async (doc) => {
      const timeOutValue = doc.data().timeOut;

      if (timeOutValue === "N/A") {
        // Update the document with the current time as the time-out
        const date = new Date();
        await updateDoc(doc.ref, {
          timeOut: date,
        });
      }
    });
  } catch (error) {
    console.error("Error updating timeouts: ", error);
  }
};

const removeTimeData = async (id) => {
  try {
    const querryData = doc(db, "TimeInTimeOut", id);
    deleteDoc(querryData);
  } catch (error) {
    console.error("error deleting data", error);
  }
};

onMounted(() => {
  fetchData();
});
</script>
<template>
  <section class="min-h-screen flex flex-col items-center pt-12 bg-gray-100">
    <h1 class="font-bold mb-4 text-2xl text-gray-700">Time Clock</h1>
    <div class="flex flex-col gap-4 mb-8 sm:flex-row">
      <button
        @click="timeInEvent"
        class="bg-blue-800 hover:bg-blue-900 text-white px-6 py-2 rounded mb-2 sm:mb-0"
      >
        Time In
      </button>
      <button
        @click="updateTimeouts"
        class="bg-red-700 hover:bg-red-800 text-white px-6 py-2 rounded"
      >
        Time Out
      </button>
    </div>
    <div class="overflow-x-auto w-full sm:w-auto">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3">Time In</th>
            <th scope="col" class="px-6 py-3">Time Out</th>
            <th scope="col" class="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b" v-for="time in data">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
              {{ time.timeIn }}
            </th>
            <td class="px-6 py-4">{{ time.timeOut }}</td>
            <td class="px-6 py-4">
              <button
                @click="removeTimeData(time.id)"
                class="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full"
              >
                Remove
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
