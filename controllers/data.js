// Sample Data File to Test Passing Data from JavaScript file to Vue Component
// https://stackoverflow.com/questions/59982953/passing-data-from-external-js-file-to-vue-component

const data = {
	
	product1: {
    catagories: 'TEST',
    price: 'TEST',
    name: 'TEST',
    description: 'TEST123',
    url: 'https://storage.googleapis.com/ecommerce-f0a2b.appspot.com/capture.png?GoogleAccessId=firebase-adminsdk-cgbfl%40ecommerce-f0a2b.iam.gserviceaccount.com&Expires=1710648000&Signature=CYifGo2Pv9vjCwnYvOotx7Gr37D7BNPb2v8K7UrcopNEr8KMteYFloG7iO8nlJBKs7Vo6xyavLcEmv4QbNdIAYQFKLd4II%2F8tkijkm11dKxg0jEj78ljG20UDUXIS5JjvpsKjZWMETkmF3IEYYdJvOrQ4%2FeAj0GotoMcUwiZJEnBSqH%2BHxWwGTEEj01GkLZp0GqYpqEd%2FE%2FG5Ia2Wb1wTGrvliusEmrC98TNWabvmuCySWG4bKnZtHmj19eqW6GXXy%2BGcI%2FfLfUNmoyEbSzLgoFkxMfncQlg4qjHgI2HlmpwYRAl2vJ2Ec03W64EbrYf5aaJqPt%2BQh0YwqxovsiqOA%3D%3D',
    title: 'iphone 14'
  },

	product2: {
    catagories: 'phones',
    price: '800',
    name: 'john',
    description: 'great condition iphone',
    title: 'iphone 13',
    url: 'https://storage.googleapis.com/ecommerce-f0a2b.appspot.com/iphone.jpg?GoogleAccessId=firebase-adminsdk-cgbfl%40ecommerce-f0a2b.iam.gserviceaccount.com&Expires=1710648000&Signature=VLeufarSfH%2B%2FQmRtlbKSQaIk5BvblbbAhAMtHY%2BjEW4tBhNiVd0U0fNprnB7Un%2FCwc64n0cc2Zz1sERDBW%2Bc9nhLZ0C0NMs06SwdelzMkQ8LJtnGx6Na1eDBzWNSMdm4dCNi9TJJZmgi1dXs4rVfV79AyVeH7tXeZnYQ9cnLpgUuF0DuOrrzszIrpgkHOcjkgIiijeoDjeOWHsa27vFfycjPkK7O91THpZy8rQSeyopDc3Ypxyk9TdrwK0Xg3ympwFRT2vvHAcN5O3Lfo1p%2FlEhfDeRLcb0hYmSANLzfcDJmZa39bw7Gbqh6QwCcGufdaqsoh%2FgzbKeroC%2B1M8t38Q%3D%3D'
  }

}

//export default data;

module.exports.data = data;