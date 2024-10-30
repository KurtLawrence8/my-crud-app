<template>
    <div class="container">
        <h1 class="page-title">Computer Inventory</h1>

        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <button class="btn btn-primary" type="button">+ Add Computer</button>
        </div>
        
        <table class="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>Brand</th>
                    <th>Model</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="computer in computerlist" v-bind:key="computer.id">
                    <td>{{ computer.brand }}</td>
                    <td>{{ computer.model }}</td>
                    <td class="action-buttons">
                        <button @click="editComputer(computer.id)" class="btn btn-primary btn-sm">Edit</button>
                        <button @click="deleteComputer(computer.id)" class="btn btn-danger btn-sm">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            name: 'Jose Marie Chan',
            computerlist: []
        };
    },
    methods: {
        getComputers() {
            alert(this.name);
            axios.get('http://127.0.0.1:8000/api/computer')
                .then(response => {
                    this.computerlist = response.data;
                })
                .catch(error => {
                    console.error("There was an error!", error);
                });
        },
        editComputer(id) {
            alert(`Editing computer with ID: ${id}`);
        },
        deleteComputer(id) {
            alert(`Deleting computer with ID: ${id}`);
        }
    },
    mounted() {
        this.getComputers();
    }
};
</script>

<style scoped>
.page-title {
    text-align: center;
    font-size: 24px;
    color: #333;
    margin-top: 20px;
}

.table {
    width: 100%;
    margin-top: 20px;
}

.table th,
.table td {
    text-align: center;
    vertical-align: middle;
}

thead th {
    background-color: #333;
    color: #fff;
}

.action-buttons .btn {
    margin: 0 5px;
}

.action-buttons .btn:hover {
    opacity: 0.9;
}
</style>
