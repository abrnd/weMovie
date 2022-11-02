const rate = (vote) => {
    const rate = [];
    const start_number = Math.round((vote / 2));
    for(let i = 0; i < 5; i++){
        (i < start_number) ? rate.push("★") : rate.push("☆");
    }

    return rate.join(" ");
}

export default rate;