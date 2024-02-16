import React, { useState } from 'react';
import FaqItem from './components/FaqItem';

const App = () => {

  const FAQ = [
    {
      question: "What is the most common programming language used in the tech industry?",
      answer: "Currently, JavaScript is one of the most common programming languages used in the tech industry, followed by Python and Java.",
    },
    {
      question: "What is the difference between front-end and back-end development?",
      answer: "Front-end development focuses on the user interface and user experience of a website or application, while back-end development deals with server-side logic, databases, and application functionality.",
    },
    {
      question: "What is version control, and why is it important?",
      answer: "Version control is a system that records changes to a file or set of files over time so that you can recall specific versions later. It's important because it allows multiple developers to work on a project simultaneously, tracks changes, and enables collaboration.",
    },
    {
      question: "What is the difference between Git and GitHub?",
      answer: "Git is a distributed version control system, while GitHub is a web-based platform built around Git that provides hosting for software development version control using Git.",
    },
    {
      question: "What is a RESTful API?",
      answer: "A RESTful API (Representational State Transfer Application Programming Interface) is an architectural style for designing networked applications. It relies on a stateless, client-server, cacheable communication protocol, typically HTTP.",
    },
    {
      question: "What is the difference between PUT and POST HTTP methods?",
      answer: "PUT is used to update a resource, while POST is used to create a new resource.",
    },
    {
      question: "What is the purpose of SQL?",
      answer: "SQL (Structured Query Language) is used to communicate with and manipulate databases. It is essential for storing, manipulating, and retrieving data in relational databases.",
    },
    {
      question: "What is the difference between SQL and NoSQL databases?",
      answer: "SQL databases are relational databases that use structured query language, while NoSQL databases are non-relational or distributed databases that provide a mechanism for storage and retrieval of data.",
    },
    {
      question: "What is the difference between unit testing and integration testing?",
      answer: "Unit testing is testing individual components or units of code in isolation, while integration testing tests how those units work together.",
    },
    {
      question: "What is DevOps?",
      answer: "DevOps is a set of practices that combines software development (Dev) and IT operations (Ops). It aims to shorten the systems development life cycle and provide continuous delivery with high software quality.",
    },
    {
      question: "What is Continuous Integration (CI)?",
      answer: "Continuous Integration is the practice of merging all developers' working copies to a shared mainline several times a day. Each integration is verified by an automated build (including test) to detect integration errors as quickly as possible.",
    },
    {
      question: "What is the Agile methodology?",
      answer: "Agile is a project management approach that emphasizes iterative development, collaboration between cross-functional teams, and customer feedback. It allows teams to respond to changes and deliver high-quality software quickly.",
    },
    {
      question: "What is the difference between synchronous and asynchronous programming?",
      answer: "Synchronous programming means that tasks are executed one after the other, blocking further execution until the current task is completed. Asynchronous programming allows tasks to be executed concurrently, without blocking the main thread.",
    },
    {
      question: "What is the difference between a framework and a library?",
      answer: "A framework provides a structure and predefined set of rules for building software applications, while a library is a collection of reusable code that can be used to perform specific tasks.",
    },
    {
      question: "What is scalability in terms of software architecture?",
      answer: "Scalability refers to the ability of a system to handle an increasing amount of workload or traffic by adding resources or nodes to the system.",
    }
  ];


  return (
    <div className="bg-gray-100 pb-10" >
      <div className="lg:w-1/2 lg:mx-auto">
        <div className="mx-auto w-full text-center py-8 text-4xl font-bold">FAQ</div>

        {
          FAQ.map((item, index) => {
            return <FaqItem key={index} item={item} initial={index === 0} />
          })
        }

      </div>
    </div>
  )
}

export default App;
