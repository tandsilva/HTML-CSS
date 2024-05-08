const contacts=[
    {name:'Aldrin',number:'(16)992434197',peso:155},
    {name:'Jesus',number:'(99)99999999',peso:180},
    {name:'Aline',number:'(55)77777777',peso:80},
]

contacts.forEach((element,index,array) => {
  
    console.log(` ${index+1}),console.log ${element.name},Numero: ${element.number},
     Eh você esta pesando ${element.peso} ,e arraia ${array.filter("Aldrin")} `)



});