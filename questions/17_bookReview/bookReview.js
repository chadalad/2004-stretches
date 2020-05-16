class BookReview {
    constructor(title, author) {
        this.title = title;
        this.author = author;
        this.notes = [];
        this.rating;
    }

    addNotes(num, note) {
        if (this.notes[num] === undefined) { this.notes[num] = note; }
        else { this.notes[num] += ` ${note}`; }
    }

    addRating(rating) {
        if (rating <= 5 && rating > 0) {
            this.rating = rating;
        }
        else { throw new Error('invalid rating'); }
    }
}
module.exports = { BookReview };
