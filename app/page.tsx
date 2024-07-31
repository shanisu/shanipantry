import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div> 
        <h1 className = "dancingscript text-[80px] pt-10 text-center "> welcome to your pantry!</h1>
        <h1 className = "dancingscript text-[40px] pl-10 pr-10 bg-white bg-opacity-80 "> your inventory: </h1>
      </div>

      <table class="table-auto">
    <thead>
      <tr>
        <th>Title</th>
        <th>Author</th>
        <th>Views</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Intro to CSS</td>
        <td>Adam</td>
        <td>858</td>
      </tr>
      <tr>
        <td>A Long and Winding Tour of the History of UI Frameworks and Tools and the Impact on Design</td>
        <td>Adam</td>
        <td>112</td>
      </tr>
      <tr>
        <td>Intro to JavaScript</td>
        <td>Chris</td>
        <td>1,280</td>
      </tr>
    </tbody>
  </table>
    </main>
  );
}

