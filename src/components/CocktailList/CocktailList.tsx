import CocktailCard from "./CocktailCard/CocktailCard";
import css from "./CocktailList.module.css";

const cocktails = [
  {
    _id: "639b6de9ff77d221f190c576",
    drink: "Dark and Stormy",
    drinkThumb:
      "https://ftp.goit.study/img/drinkify/recipes/Dark_and_Stormy.jpg",
    description:
      "Dark and Stormy is a bold and flavorful cocktail that combines the rich flavors of dark rum, spicy ginger beer, and a splash of zesty lime juice. This classic cocktail is characterized by its deep, amber color and its perfect balance of sweetness, spice, and citrus. Sip on a Dark and Stormy to experience a harmonious blend of flavors that will awaken your taste buds.",
    isPremium: true,
  },
  {
    _id: "639b6de9ff77d221f190c62e",
    drink: "Foxy Lady",
    drinkThumb: "https://ftp.goit.study/img/drinkify/recipes/Foxy_Lady.jpg",
    description:
      "Foxy Lady is a sweet and fruity cocktail that's perfect for those who enjoy the delightful combination of amaretto, orange juice, and grenadine. This playful libation blends amaretto with freshly squeezed orange juice and a splash of grenadine, creating a vibrant and sweet drink with a hint of nuttiness. It's known for its flirtatious character and the ability to add a touch of fun to your cocktail experience. Sip on a Foxy Lady and let its fruity charm make you the life of the party.",
  },
  {
    _id: "639b6de9ff77d221f190c641",
    drink: "Flander's Flake-Out",
    drinkThumb:
      "https://ftp.goit.study/img/drinkify/recipes/Flander_s_Flake-Out.jpg",
    description:
      "Flander's Flake-Out is a cozy and warming cocktail that's perfect for those who enjoy the comforting and soothing qualities of hot drinks. This heartwarming libation combines spiced rum with honey and hot water, creating a drink that's perfect for chilly evenings or when you need to unwind and relax. It's a cocktail that's known for its warmth and honeyed sweetness, making it a favorite choice for cozy nights by the fireplace. Sip on a Flander's Flake-Out and let it warm your soul.",
  },
  {
    _id: "639b6de9ff77d221f190c52a",
    drink: "After sex",
    drinkThumb: "https://ftp.goit.study/img/drinkify/recipes/After_sex.jpg",
    description:
      "After sex is a creamy and seductive cocktail that combines the flavors of cream liqueur and coffee liqueur. This indulgent drink is perfect for a cozy nightcap or for adding a touch of sensuality to your evening. Sip on an After sex cocktail and let its creamy and seductive flavors set the mood for a relaxing and pleasurable experience.",
  },
  {
    _id: "639b6de9ff77d221f190c65a",
    drink: "Zenmeister",
    drinkThumb: "https://ftp.goit.study/img/drinkify/recipes/Zenmeister.jpg",
    description:
      "Zenmeister is a calming and herbal cocktail that's perfect for those seeking a serene and balanced drinking experience. This contemplative libation combines gin with green chartreuse and a selection of herbal liqueurs, creating a complex and botanical drink with a soothing and meditative character. It's known for its herbal and aromatic qualities, making it an ideal choice for winding down and embracing a moment of zen. Sip on a Zenmeister and discover the tranquility of herbal harmony.",
  },
  {
    _id: "639b6de9ff77d221f190c5fd",
    drink: "Bramble",
    drinkThumb: "https://ftp.goit.study/img/drinkify/recipes/Bramble.jpg",
    description:
      "Bramble is a refreshing and fruity cocktail that's perfect for those who enjoy the bright and tangy flavors of blackberries. This revitalizing libation combines gin with blackberry liqueur and lemon juice, creating a vibrant and zesty drink with a hint of berry sweetness. It's a cocktail that's known for its fruity medley and the crispness of gin, making it a favorite choice for those who appreciate a lively and invigorating sip. Sip on a Bramble and let its berry goodness awaken your taste buds.",
  },
  {
    _id: "639b6de9ff77d221f190c688",
    drink: "Gin Sling",
    drinkThumb: "https://ftp.goit.study/img/drinkify/recipes/Gin_Sling.jpg",
    description:
      "Gin Sling is a fruity and refreshing cocktail that's perfect for those who love the vibrant and fruity flavors of gin. This invigorating libation combines gin with cherry brandy and fresh lemon juice, creating a colorful and citrus-infused drink with a balance of botanicals, cherry sweetness, and zesty tartness. It's a cocktail that's known for its gin essence and the fruity kick of cherry brandy, making it a favorite choice for those who want to enjoy a revitalizing and gin-infused sip. Sip on a Gin Sling cocktail and let its vibrant flavors awaken your spirit.",
    isPremium: true,
  },
  {
    _id: "639b6de9ff77d221f190c5a9",
    drink: "Hunter's Moon",
    drinkThumb: "https://ftp.goit.study/img/drinkify/recipes/Hunter_s_Moon.jpg",
    description:
      "Hunter's Moon is a bold and robust cocktail that evokes the spirit of the wilderness. This powerful drink combines a mix of dark spirits, such as bourbon and dark rum, with a touch of sweetness from simple syrup or honey. The result is a smoky and full-bodied cocktail with a perfect balance of richness and sweetness. Sip on a Hunter's Moon and let its adventurous flavors transport you to the heart of nature.",
  },
  {
    _id: "639b6de9ff77d221f190c569",
    drink: "110 in the shade",
    drinkThumb:
      "https://ftp.goit.study/img/drinkify/recipes/110_in_the_shade.jpg",
    description:
      "110 in the shade is a refreshing and cooling cocktail that combines the flavors of tequila, lime juice, mint, and fizzy soda water. This invigorating drink offers a perfect balance of citrusy, herbal, and bubbly notes. Sip on a 110 in the shade cocktail and let its refreshing flavors quench your thirst on a hot day.",
  },
  {
    _id: "639b6de9ff77d221f190c5e0",
    drink: "Raspberry Julep",
    drinkThumb:
      "https://ftp.goit.study/img/drinkify/recipes/Raspberry_Julep.jpg",
    description:
      "Raspberry Julep is a fruity and refreshing twist on the classic mint julep cocktail. This delightful drink combines the bold flavors of bourbon with the sweet and tart notes of raspberry. It's a refreshing choice for warm summer days or any time you crave a fruity and spirited sip. Sip on a Raspberry Julep and let its vibrant flavors invigorate your taste buds.",
    isPremium: true,
  },
  {
    _id: "639b6de9ff77d221f190c5cb",
    drink: "Chocolate Drink",
    drinkThumb:
      "https://ftp.goit.study/img/drinkify/recipes/Chocolate_Drink.jpg",
    description:
      "Chocolate Drink is a rich and indulgent beverage that satisfies your chocolate cravings. This velvety drink combines the smoothness of chocolate with a touch of sweetness, whether from chocolate liqueur, cocoa powder, or a splash of cream. The result is a decadent and comforting drink that envelops you in the luxurious flavors of chocolate. Sip on a Chocolate Drink and indulge in its rich and luscious goodness.",
  },
  {
    _id: "639b6de9ff77d221f190c6a4",
    drink: "Texas Sling",
    drinkThumb: "https://ftp.goit.study/img/drinkify/recipes/Texas_Sling.jpg",
    description:
      "Texas Sling is a fruity and refreshing cocktail that's perfect for those who love the vibrant and sweet flavors of whiskey-based drinks. This invigorating libation combines whiskey with cherry brandy and fresh orange juice, creating a colorful and citrus-infused drink with a balance of whiskey warmth, cherry sweetness, and fruity goodness. It's a cocktail that's known for its whiskey essence and the bright kick of citrus, making it a favorite choice for those who want to enjoy a taste of Texas in their glass. Sip on a Texas Sling cocktail and let its fruity vibes transport you to the Lone Star State.",
  },
  {
    _id: "639b6de9ff77d221f190c579",
    drink: "Damned if you do",
    drinkThumb:
      "https://ftp.goit.study/img/drinkify/recipes/Damned_if_you_do.jpg",
    description:
      "Damned if you do is a bold and spicy cocktail that combines the warmth of whiskey, the kick of ginger beer, the tanginess of lime juice, and a dash of hot sauce for an extra fiery touch. This cocktail is not for the faint of heart and is perfect for those who enjoy a drink with a little heat and a lot of character. Prepare yourself for the intense flavors of Damned if you do!",
  },
  {
    _id: "639b6de9ff77d221f190c528",
    drink: "Adam Bomb",
    drinkThumb: "https://ftp.goit.study/img/drinkify/recipes/Adam_Bomb.jpg",
    description:
      "Adam Bomb is a cocktail that lives up to its name with its explosive combination of high-proof spirits and intense flavors. This potent drink is made by mixing strong spirits, such as rum and vodka, with a splash of liqueur and citrus juice. It delivers a punch of alcohol and a burst of flavor that will leave you buzzing. Approach this cocktail with caution and enjoy its explosive nature in moderation.",
  },
  {
    _id: "639b6de9ff77d221f190c582",
    drink: "Van Vleet",
    drinkThumb: "https://ftp.goit.study/img/drinkify/recipes/Van_Vleet.jpg",
    description:
      "A delicious recipe for Van Vleet, with light rum, maple syrup and lemon juice. Also lists similar drink recipes.",
    isPremium: true,
  },
  {
    _id: "639b6de9ff77d221f190c507",
    drink: "Irish Cream",
    drinkThumb: "https://ftp.goit.study/img/drinkify/recipes/Irish_Cream.jpg",
    description:
      "Irish Cream is a creamy and indulgent liqueur that showcases the flavors of Irish whiskey, rich cream, and a hint of chocolate. This velvety and smooth drink is perfect for sipping on its own or adding a touch of luxury to your coffee or desserts. Treat yourself to a glass of Irish Cream and indulge in its decadent flavors.",
  },
  {
    _id: "639b6de9ff77d221f190c5c0",
    drink: "City Slicker",
    drinkThumb: "https://ftp.goit.study/img/drinkify/recipes/City_Slicker.jpg",
    description:
      "City Slicker is a cosmopolitan and sophisticated cocktail that's perfect for those who appreciate the finer things in life. This elegant drink combines bourbon with vermouth and a touch of bitters, creating a rich and complex flavor profile. It's a cocktail that's best enjoyed in a dimly lit lounge or a swanky bar, where you can savor every sip in style. Raise a glass of City Slicker and toast to the urban allure of the city.",
  },
  {
    _id: "639b6de9ff77d221f190c599",
    drink: "Limona Corona",
    drinkThumb: "https://ftp.goit.study/img/drinkify/recipes/Limona_Corona.jpg",
    description:
      "Limona Corona is a refreshing and citrusy beer cocktail that combines the bright flavors of lemonade with the crispness of a Mexican lager, such as Corona. This zesty and effervescent drink is perfect for hot summer days or casual gatherings. The result is a tangy and thirst-quenching beverage that offers a delightful balance of citrus and beer flavors. Sip on a Limona Corona and enjoy its invigorating qualities.",
    isPremium: true,
  },
  {
    _id: "639b6de9ff77d221f190c6b9",
    drink: "501 Blue",
    drinkThumb: "https://ftp.goit.study/img/drinkify/recipes/501_Blue.jpg",
    description:
      "501 Blue is a colorful and tropical cocktail that's perfect for those who enjoy visually stunning and vibrant drinks. This eye-catching libation combines blue curaçao with coconut rum and pineapple juice, creating a dazzling and azure-hued drink with a striking tropical flavor. It's a cocktail that's known for its playful colors and the exotic goodness of coconut and pineapple, making it a favorite choice for those who want to escape to a tropical paradise in their glass. Take a journey to the azure seas with a 501 Blue cocktail and let its vibrant flavors transport you.",
  },
  {
    _id: "639b6de9ff77d221f190c66c",
    drink: "Moranguito",
    drinkThumb: "https://ftp.goit.study/img/drinkify/recipes/Moranguito.jpg",
    description:
      "Moranguito is a fruity and refreshing cocktail that's perfect for those who love the vibrant and sweet flavors of strawberries. This invigorating libation combines rum with fresh strawberry puree and zesty lime juice, creating a colorful and berry-infused drink with a balance of sweetness, tartness, and tropical goodness. It's a cocktail that's known for its fruity flair and the bright kick of lime, making it a favorite choice for those who want to enjoy a taste of the tropics in their glass. Sip on a Moranguito cocktail and let the fruity vibes transport you to a sun-soaked paradise.",
  },
  {
    _id: "639b6de9ff77d221f190c59d",
    drink: "Lone Tree Cooler",
    drinkThumb:
      "https://ftp.goit.study/img/drinkify/recipes/Lone_Tree_Cooler.jpg",
    description:
      "Lone Tree Cooler is a refreshing and invigorating drink that's perfect for hot summer days. This revitalizing cooler combines gin with elderflower liqueur and a splash of citrus juice for a burst of flavor. It's a drink that's as crisp and refreshing as a cool breeze on a sunny day. Sip on a Lone Tree Cooler and enjoy the vibrant taste of summer.",
  },
  {
    _id: "639b6de9ff77d221f190c550",
    drink: "Planter's Punch",
    drinkThumb:
      "https://ftp.goit.study/img/drinkify/recipes/Planter_s_Punch.jpg",
    description:
      "Planter's Punch is a classic tropical cocktail that features a delightful blend of rum, citrus juices, grenadine, and a touch of sweetness. This refreshing drink is known for its vibrant tropical flavors and is typically garnished with a slice of fruit. Whether you're lounging by the beach or hosting a summer gathering, Planter's Punch is sure to transport you to a tropical paradise.",
  },
  {
    _id: "639b6de9ff77d221f190c69a",
    drink: "Egg Nog - Healthy",
    drinkThumb:
      "https://ftp.goit.study/img/drinkify/recipes/Egg_Nog_-_Healthy.jpg",
    description:
      "Egg Nog - Healthy is a creamy and healthier version of the classic egg nog cocktail, making it perfect for those who want to enjoy the comforting flavors of egg nog with a lighter twist. This delightful libation combines milk or a dairy-free alternative with egg yolks, vanilla extract, nutmeg, and a touch of sweetener, creating a creamy and flavorful drink that's reminiscent of the holiday season. It's a cocktail that's known for its nostalgic charm and the rich, spiced goodness of egg nog, without the excess calories. Sip on an Egg Nog - Healthy cocktail and savor the festive flavors with a guilt-free touch.",
    isPremium: true,
  },
  {
    _id: "639b6de9ff77d221f190c541",
    drink: "Paloma",
    drinkThumb: "https://ftp.goit.study/img/drinkify/recipes/Paloma.jpg",
    description:
      "Paloma is a refreshing and tangy tequila-based cocktail that is beloved for its simplicity and vibrant flavors. This Mexican classic combines tequila with grapefruit soda for a zesty and effervescent base. A squeeze of fresh lime juice adds a bright and citrusy twist. The result is a thirst-quenching drink that is both refreshing and satisfying. Kick back, relax, and savor the vibrant flavors of a Paloma.",
  },
  {
    _id: "639b6de9ff77d221f190c5f5",
    drink: "Whitecap Margarita",
    drinkThumb:
      "https://ftp.goit.study/img/drinkify/recipes/Whitecap_Margarita.jpg",
    description:
      "Whitecap Margarita is a frosty and creamy margarita that's perfect for those who enjoy the indulgent qualities of creamy cocktails. This delightful drink combines tequila with cream of coconut and lime juice, creating a rich and velvety libation. It's a cocktail that's reminiscent of tropical vacations and beachside relaxation. Sip on a Whitecap Margarita and let its creamy and tropical flavors transport you to a sandy paradise.",
  },
];

const CocktailList = () => {
  return (
    <div className={css["cocktails"]}>
      <h1>Cocktails</h1>
      <ul className={css["list"]}>
        {cocktails.map((el) => {
          return (
            <CocktailCard
              key={el._id}
              title={el.drink}
              img={el.drinkThumb}
              desc={el.description}
              isPremium={el?.isPremium}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default CocktailList;
