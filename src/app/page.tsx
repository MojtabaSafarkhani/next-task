import { useEffect } from 'react';


export default function Home() {
  return (
    
 <main className="flex flex-row  justify-center p-2 m-5">
  <div className="collapse collapse-arrow  bg-yellow-200 text-black md:w-1/4">
  <input type="checkbox" /> 
  <div className="collapse-title text-lg font-bold">
    Habib targets
  </div>
  <div className="collapse-content"> 
   <table className="table table-xs border-collapse border border-black ">
   <thead>
      <tr className="font-bold text-black">
        <th className="border border-black">ID</th> 
        <th className="border border-black">Lan</th> 
        <th className="border border-black">Lat</th> 
        <th className="border border-black">canton</th> 


      </tr>
    </thead>
    <tbody>
      <tr>
        <td>12234</td> 
        <td className="border border-black">12234</td> 
        <td className="border border-black font-bold text-red-700">15</td> 
        <td className="border border-black font-bold text-green-700 ">350</td> 
      </tr>
      <tr>
        <td>67988</td> 
        <td className="border border-black">67988</td> 
        <td className="border border-black font-bold text-red-700">20</td> 
        <td className="border border-black font-bold text-green-700">125</td> 

      </tr>

    
    </tbody>
   </table>
  </div>
</div>
 </main>
  )
}
