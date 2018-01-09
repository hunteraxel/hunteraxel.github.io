$('.turn').click(function () {
    console.log(this);
    if (this.className == "card-single turn") {
        this.className += " rotated";
    } else {
        this.className = "card-single turn";
    }
});