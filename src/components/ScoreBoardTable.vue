<template>
  <v-simple-table>
    <template #default>
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Nick name</th>
          <th class="text-left">Last name</th>
          <th class="text-left">Category</th>
          <th class="text-left">Time (HH:MM:SS:mm)</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in desserts" :key="item.name">
          <td>{{ item.name }}</td>
          <td>{{ item.nickName }}</td>
          <td>{{ item.lastName }}</td>
          <td>{{ item.category }}</td>
          <td>{{ item.time }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  data() {
    return {
      desserts: [
        {
          name: "Frozen Yogurt",
          nickName: "Frozen Yogurt",
          lastName: "Frozen Yogurt",
          category: 159,
          time: 159,
        },
        {
          name: "Ice cream sandwich",
          nickName: "Ice cream sandwich",
          lastName: "Ice cream sandwich",
          category: 237,
          time: 237,
        },
        {
          name: "Eclair",
          nickName: "Eclair",
          lastName: "Eclair",
          category: 262,
          time: 262,
        },
        {
          name: "Cupcake",
          nickName: "Cupcake",
          lastName: "Cupcake",
          category: 305,
          time: 305,
        },
        {
          name: "Gingerbread",
          nickName: "Gingerbread",
          lastName: "Gingerbread",
          category: 356,
          time: 356,
        },
        {
          name: "Jelly bean",
          nickName: "Jelly bean",
          lastName: "Jelly bean",
          category: 375,
          time: 375,
        },
        {
          name: "Lollipop",
          nickName: "Lollipop",
          lastName: "Lollipop",
          category: 392,
          time: 392,
        },
        {
          name: "Honeycomb",
          nickName: "Honeycomb",
          lastName: "Honeycomb",
          category: 408,
          time: 408,
        },
        {
          name: "Donut",
          nickName: "Donut",
          lastName: "Donut",
          category: 452,
          time: 452,
        },
        {
          name: "KitKat",
          nickName: "KitKat",
          lastName: "KitKat",
          category: 518,
          time: 518,
        },
      ],
    };
  },
};
</script>
