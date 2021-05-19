const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const PostSchema = Schema(
  {
    title: {
      type: String,
      trim: true,
    },
    url: {
      type: String,
      required: false,
    },
    authorId: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    likedBy: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: "user",
        },
      ],
      default: [],
    },
  },
  {
    timestamps: true,
  },
);

const Post = mongoose.model("post", PostSchema);

module.exports = Post;
