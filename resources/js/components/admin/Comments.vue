<template>
    <div class="card my-4">
        <h5 class="card-header">Leave a Comment:</h5>
        <div class="card-body">
            <form action="">
                <div class="form-group">
                    <textarea ref="body" rows="3" class="form-control"></textarea>
                </div>
                <button type="submit" @click.prevent="addComment" class="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
        <p class="border p-3" v-for="comment in comments">
            <strong>{{ comment.user.name }}</strong>:
            <span>{{ comment.body }}</span>
        </p>
    </div>
</template>
<script>
export default {
    props: {
        userName: {
            type: String,
            required: true
        },
        postId: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            comments: []
        };
    },

    created() {
        this.fetchComments();

        Echo.private("comment").listen("CommentSent", e => {
            this.comments.push({
                user: {name: e.user.name},
                body: e.comment.body
            });
        });
    },

    methods: {
        fetchComments() {
            axios.get("/" + this.postId + "/comments").then(response => {
                this.comments = response.data;
            });
        },

        addComment() {
            let body = this.$refs.body.value;
            axios.post("/" + this.postId + "/comments", { body }).then(response => {
                this.comments.push({
                    user: {name: this.userName},
                    body: this.$refs.body.value
                });
                this.$refs.body.value = "";
            });
        }
    }
};
</script>
