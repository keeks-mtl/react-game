import Card from './Card';

const GameCards = () => {
    const cardIds = []
    let i;
    while (i < 4) {
        Math.floor(Math.random() * 20)
        cardIds.push()
        i++;
      }
    console.log(cardIds);
    const content = cardIds.map(cardId => (<Card hero={cardId} />))

    return (
        {content}
    );
}

export default GameCards;