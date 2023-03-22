let activeIndex = 0;

const groups = document.getElementsByClassName('card-body');

const handleLoveClick = () => {
    // Bump next Index

    const nextIndex = activeIndex + 1 <= groups.length - 1 ? activeIndex + 1 : 0;

    const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`);
    const nextGroup = document.querySelector(`[data-Index="${nextIndex}"]`);

    // Active group becomes after

    currentGroup.dataset.status = 'after';

    //Next group becomes active
    
    nextGroup.dataset.status = 'becoming-active-from-before';

    setTimeout(() => {
        nextGroup.dataset.status = 'active'
        activeIndex = nextIndex;
    });
}