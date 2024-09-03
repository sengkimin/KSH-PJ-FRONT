import React from 'react';
import TaskCard from '../../components/ActivitiesBox';
import {Link} from 'react-router-dom'

const Activities = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
          <Link to='/residents/:id'>
          <button className="bg-gray-300 px-6 py-1.5 md:px-12 md:py-2 rounded mb-16">
            Back
          </button>
        </Link>
        
      <h1 className="text-3xl font-bold mb-14 text-center">All of Activities Students</h1>
      <div className="w-full max-w-3xl mx-auto flex flex-wrap gap-2">
        <TaskCard id='1.' title="Clean The Leaf" image="http://surl.li/dqhviq" />
        <TaskCard id='1.' title="Clean The Leaf" image="http://surl.li/dqhviq" />
        <TaskCard id='1.' title="Clean The Leaf" image="http://surl.li/dqhviq" />
        <TaskCard id='1.' title="Clean The Leaf" image="http://surl.li/dqhviq" />
        <TaskCard id='1.' title="Clean The Leaf" image="http://surl.li/dqhviq" />
        <TaskCard id='1.' title="Clean The Leaf" image="http://surl.li/dqhviq" />
        <TaskCard id='1.' title="Clean The Leaf" image="http://surl.li/dqhviq" />
        <TaskCard id='1.' title="Clean The Leaf" image="http://surl.li/dqhviq" />
        <TaskCard id='1.' title="Clean The Leaf" image="http://surl.li/dqhviq" />
        <TaskCard id='1.' title="Clean The Leaf" image="http://surl.li/dqhviq" />
        <TaskCard id='1.' title="Clean The Leaf" image="http://surl.li/dqhviq" />
   
      </div>
    </div>
  );
};

export default Activities;
