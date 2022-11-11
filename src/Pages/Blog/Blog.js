import React from 'react';
import img from '../../Assets/images/faq.png'
import useTitleHook from '../../hooks/useTitleHook';

const Blog = () => {
    useTitleHook('Blog');
    return (
        <div className="container flex flex-col justify-center py-5 mx-auto md:p-8">
            <h2 className="text-4xl font-semibold text-center pb-5">
                Frequently Asked Questions
            </h2>
            <img src={img} className='w-4/5 mx-auto pb-5' alt="" />
            <div className="space-y-4 sm:px-4">
                <details className="w-full border rounded-lg" open="">
                    <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 font-semibold text-lg">
                        Difference between SQL and NoSQL
                    </summary>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                        SQL is the programming language used to interface with relational databases. Relational databases model data as records in rows and tables with logical links between them. NoSQL is a class of DBMs that are non-relational and generally do not use SQL.
                    </p>
                </details>
                <details className="w-full border rounded-lg" open="">
                    <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 font-semibold text-lg">
                        What is JWT, and how does it work?
                    </summary>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                        JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.

                        JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.

                        A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.

                        Once decoded, you will get two JSON strings:

                        1. The header and the payload.
                        2. The signature.
                    </p>
                </details>
                <details className="w-full border rounded-lg" open="">
                    <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 font-semibold text-lg">
                        What is the difference between javascript and NodeJS?
                    </summary>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                        1. JavaScript is a client-side scripting language that is lightweight, cross-platform, and interpreted. Both Java and HTML include it. Node.js, on the other hand, is a V8-based server-side programming language.

                        As a result, it is used to create network-centric applications. It's a networked system made for data-intensive real-time applications. If we compare node js vs. python, it is clear that node js will always be the preferred option.

                        2. JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful.

                        3. Any engine may run JavaScript. As a result, writing JavaScript is incredibly easy, and any working environment is similar to a complete browser. Node.js, on the other hand, only enables the V8 engine. Written JavaScript code, on the other hand, can run in any context, regardless of whether the V8 engine is supported.

                        4. A specific non-blocking operation is required to access any operating system. There are a few essential objects in JavaScript, but they are entirely OS-specific.

                        Node.js, on the other hand, can now operate non-blocking software tasks out of any JavaScript programming. It contains no OS-specific constants. Node.js establishes a strong relationship with the system files, allowing companies to read and write to the hard drive.

                        5. The critical benefits of JavaScript include a wide choice of interfaces and interactions and just the proper amount of server contact and direct visitor input.

                        Node.js, on the other hand, offers node package management with over 500 modules and the capacity to handle many requests at the same time. It also offers the unique ability to enable microservice architecture and the Internet of Things. Even when comparing node js vs. react js, node js always wins.
                    </p>
                </details>
                <details className="w-full border rounded-lg" open="">
                    <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 font-semibold text-lg">
                        How does NodeJS handle multiple requests at the same time?
                    </summary>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                        NodeJS Web Server maintains a limited Thread Pool to provide services to client requests. Multiple clients make multiple requests to the NodeJS server. NodeJS receives these requests and places them into the EventQueue .
                        NodeJS server has an internal component referred to as the EventLoop which is an infinite loop that receives requests and processes them. This EventLoop is single threaded. In other words, EventLoop is the listener for the EventQueue.
                        So, we have an event queue where the requests are being placed and we have an event loop listening to these requests in the event queue. What happens next?
                        The listener(the event loop) processes the request and if it is able to process the request without needing any blocking IO operations, then the event loop would itself process the request and sends the response back to the client by itself.
                        If the current request uses blocking IO operations, the event loop sees whether there are threads available in the thread pool, picks up one thread from the thread pool and assigns the particular request to the picked thread. That thread does the blocking IO operations and sends the response back to the event loop and once the response gets to the event loop, the event loop sends the response back to the client.
                    </p>
                </details>
            </div>
        </div>
    );
};

export default Blog;