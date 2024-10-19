import React from 'react';
import { TwitterTweetEmbed } from 'react-twitter-embed';

const TwitterFeed = () => {
  // Define an array of tweet IDs
  const tweetIds = ['1699839877901349156', '1698762678821331226', '1696915171757707672'];

  return (
    <div className="bg-white shadow-md rounded-lg p-2 h-96 w-96 mb-4 overflow-y-auto custom-scrollbar">
      {tweetIds.map((tweetId) => (
        <TwitterTweetEmbed key={tweetId} tweetId={tweetId} />
      ))}
    </div>
  );
};

export default TwitterFeed;
