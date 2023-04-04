const details={
    loanamount:0,
    interestrate:0,
    loantenureyears:0,

    totalmonths(){
        return this.loantenureyears*12;
    },
    
    rateofinterest(){
        return this.interestrate/100;
    },

    emipermonth(){
        return (this.loanamount * this.rateofinterest() * this.loantenureyears + this.loanamount)/this.totalmonths();
    },

    totalinterestpayable(){
        return this.loanamount * this.rateofinterest;
    },
    
    totalpayableamount(){
        return this.loanamount + this.totalinterestpayable;
    }
}

export default details;