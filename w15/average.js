const total = data.reduce((sum, len) => sum + len, 0)
 console.log(total)

 const avg = total/data.length
 console.log(avg)

 export {avg,total}