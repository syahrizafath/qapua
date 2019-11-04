<template>
    <div id="posts">
        <table class="table table-striped">
            <tr v-for="post in posts">
                <td>{{ post.title }}</td>
                <td>
                    <router-link :to="{ name: 'update', params: { postId :post.id } }">
                        <button type="button" class="btn btn-sm btn-light">
                            Update
                        </button>
                    </router-link>
                    <button
                        type="button"
                        @click="deletePost(post.id)"
                        class="btn btn-sm btn-danger">
                        Delete
                    </button>
                </td>
            </tr>
        </table>
        <div>
            <button
                class="m-3 btn btn-primary"
                v-if="next"
                type="button"
                @click="navigate(next)">
                Next
            </button>
            <button
                v-if="prev"
                type="button"
                @click="navigate(prev)"
                class="m-3 btn btn-primary">
                Previous
            </button>
        </div>
    </div>
</template>
<style scoped>
    button {
        margin: 5px;
    }
</style>
<script>
export default {
    mounted() {
        this.getPosts();
    },
    data() {
        return {
            posts: {},
            next: null,
            prev: null
        };
    },
    methods: {
        getPosts(address) {
            axios.get(address ? address : "/api/posts").then(response => {
                this.posts = response.data.data;
                this.prev = response.data.links.prev;
                this.next = response.data.links.next;
            });
        },
        deletePost(id) {
            axios.delete("/api/posts/" + id).then(response => this.getPosts())
        },
        navigate(address) {
            this.getPosts(address)
        }
    }
};
</script>
