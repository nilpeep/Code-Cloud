//? ismindeki harf sayisi 5 ten fazla olan isimlerin olduğu çıktıyı veren bir Array yazınız

const isimler = ["Alice", "Bob", "Charlie", "David", "Eve"]

const bestenKucuk = isimler.filter((isim) => isim.length < 5
)

console.log(bestenKucuk);

//? Tek sayıların karesini Çift sayıların küpünü  ayrı ayrı arrayler olarak çıktı veren fonksiyonu yazınız

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const tekKare = numbers.filter((i) => i % 2 !== 0).map(i => i**2)

const ciftKup = numbers.filter((i) => i % 2 == 0).map(i => i**3)

console.log(ciftKup);

console.log(tekKare);

//? Given an array of strings containing names, filter out the names that start with the letter "A."

const names = ["Ali","amy","Danny","Jenny","penny","anthony"]

const filtered = names.filter((i) => i[0] == 'a' || 'A')

console.log(filtered);

//?  Given an array of numbers, remove duplicate values using `filter` to create a new array with unique values

const values = [1, 2, 3, 2, "kalem", "silgi", "kalem",2,3]

const uniqueValues = values.filter((value, index,ARRAY) => {
  return values.indexOf(value) === index;
});

console.log(uniqueValues);


//?   Given an array of numbers, use `forEach` to calculate the sum of the squares of each number

const numbers2 = [1, 2,  3,  5, 10]

numbers2.forEach((a) => console.log(a**2))

const values1 = [1, 2, 3, 2, "kalem", "silgi", "kalem",2,3,2]

let x=values1.filter(function(k,a,Bob){
    if (this.t===undefined) this.t=[];
    let i= (this.t.indexOf(k));
    if (i===-1) {
        this.t.push(k);
        
        return k;
    }
})
console.log(x);