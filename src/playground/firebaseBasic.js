// child_removed
database.ref('expenses').on('child_removed',(snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

// child_changed
database.ref('expenses').on('child_changed',(snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

// child_added
database.ref('expenses').on('child_added',(snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

database.ref('expenses').push({
    description: 'Gum',
    note:'First note',
    amount: 200,
    createdAt:0
});

//database.ref('notes/-M7b7DMCgaRwCZwql8Ae').remove();

// Subscribing to changes in data
/*database.ref('expenses').on('value',(snapshot) => {
    const expenses = [];
    snapshot.forEach((childSnapshot) => {
        expenses.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            });
        });
        console.log(expenses);
    }, (e) => {
        console.log('Error!', e);
    });
*/
/*
database.ref('expenses')
    .once('value')
    .then((snapshot) => {
        const expenses = [];
        snapshot.forEach((childSnapshot) => {
            expenses.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            });
        });
        console.log(expenses);
    });
*/
// Challenge
/*
database.ref('expenses').push({
    description: 'Gum',
    note:'First note',
    amount: 200,
    createdAt:0
});
*/

// Subscribing to fetch data so that it reruns whenever data changes
/*
const onValueChange = database.ref('job').on('value', (snapshot) => {
    const val = snapshot.val();
    console.log(`Tejas is ${val.title} at ${val.company}`);
},(e) => {
    console.log('Error fetchin job details');
});

setTimeout(() => {
    database.ref('job/company').set('Google');
}, 3500);
*/
/*const onValueChange = database.ref().on('value', (snapshot) => {
    console.log(snapshot.val());
}, (e) => {
    console.log('Error fetching data', e);
});

setTimeout(() => {
    database.ref('age').set(28);
}, 3500);

setTimeout(() => {
    database.ref().off(onValueChange);
}, 7000);

setTimeout(() => {
    database.ref('age').set(29);
}, 10500);*/

// Fetching data once
/*database.ref()
    .once('value')
    .then((snapshot) => {
        const val = snapshot.val();
        console.log(val);
    }).catch((e) => {
        console.log(e);
    });
*/

/*database.ref().set({
    name: 'Tejas Dahad',
    age: 19,
    stressLevel: 6,
    job: {
        title: 'Software Developer',
        company: 'Google'
    },
    location: {
        city: 'Jalgaon',
        country: 'India'
    }
}).then(() => {
    console.log('Data is saved');
}).catch((e) => {
    console.log('This failed.', e);
});*/

// Removing data using set
//database.ref('isSingle').set(null);

// Removing data using remove
/*database.ref()
    .remove()
    .then(() => {
        console.log('isSingle is removed from database');
    }).catch((e) => {
        console.log('Error!', e);
    });
*/

// Updating data
/*database.ref().update({
    job: 'Manager',
    'location/city': 'Pune'
}).then(() => {
    console.log('Updated data');
}).catch((e) => {
    console.log('Error updating ', e);
});*/

// Challenge for updating
/*database.ref().update({
    stressLevel: 9,
    'job/company': 'Amazon',
    'location/city': 'Seattle'
}).then(() => {
    console.log('Updated data');
}).catch((e) => {
    console.log('Error updating ', e);
});*/