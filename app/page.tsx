import React, { Suspense } from "react";
import TodosList from "./(users)/todos/TodosList";

function Home() {
  return (
    <div>
      <Suspense fallback={<p>Loading the Todos...</p>}>
        <h1 className="text-red-500">Loading Todos</h1>
        <div className="flex space-x-2">
          {/*  @ts-ignore */}
          <TodosList />
        </div>
      </Suspense>

      <Suspense fallback={<p>Loading the Shopping...</p>}>
        <h1>Loading Shopping Trolley</h1>
        <div className="flex space-x-2">
          {/*  @ts-ignore */}
          <TodosList />
        </div>
      </Suspense>
    </div>
  );
}

export default Home;
