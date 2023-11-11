function calculateCategories() {
    const categories = Array.from(document.querySelectorAll('ul#categories>li'));
    console.log('Number of categories:', categories.length);

    categories.forEach(category => {
        console.log('Category: ', category.querySelector('h2').innerText);
        console.log('Elements: ', Array.from(category.querySelectorAll('ul>li')).length);
    })
}

calculateCategories();
