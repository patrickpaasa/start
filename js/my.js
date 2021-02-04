console.log("included");

let tweetobj = {
    profilename: "Design Bolts",
    username: "@designbolts",
    tweet: "I have a new resource roundup out today",
    retweets: 6,
    likes: 18,
    isShown: true,
    replies: [
        {
            username: "@juliusceasar",
            reply: "This actually nice",
        },
        {
            username: "@johnricky",
            reply: "Thank you for this."
        },
        {
            username: "@designbolts",
            reply: "Thank you all",
        }
    ],
    retweet: function () {
        console.log("retweeting");
    },
    hitLike: function () {
        this.likes++;
    },
    showReplies: function () {
        for (reply of this.replies) {
            console.log(`${reply.username}: ${reply.reply}`);
        }
    }
}
tweetobj.showReplies();

