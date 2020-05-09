//write the splatter function

const splatter = () => {
  //write code here
  const args = [...arguments];
  console.log(args);
  args.reduce((acc, current) => {
    Object.values(current).forEach(elem => {
      acc = acc + elem;
    });
    console.log(acc);
    return acc;
  }, 0)

};

module.exports = { splatter };
