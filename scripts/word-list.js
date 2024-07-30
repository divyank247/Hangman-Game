const wordList = [
  { word: 'guitar', hint: 'A musical instrument with strings' },
  { word: 'apple', hint: 'A common fruit that is often red or green' },
  { word: 'elephant', hint: 'A large mammal with big ears and a trunk' },
  { word: 'moon', hint: 'The natural satellite of the Earth' },
  { word: 'river', hint: 'A large, flowing body of water' },
  { word: 'coffee', hint: 'A popular beverage made from roasted beans' },
  { word: 'computer', hint: 'An electronic device used for processing data' },
  {
    word: 'mountain',
    hint: "A large natural elevation of the Earth's surface",
  },
  { word: 'soccer', hint: 'A sport played with a round ball on a field' },
  { word: 'book', hint: 'A set of written or printed pages bound together' },
  {
    word: 'pyramid',
    hint: 'A structure with a square base and triangular sides',
  },
  { word: 'bicycle', hint: 'A vehicle with two wheels powered by pedaling' },
  { word: 'lighthouse', hint: 'A tower with a light used to guide ships' },
  { word: 'painting', hint: 'Art created with colors on a canvas' },
  {
    word: 'chess',
    hint: 'A strategic board game played with pieces like pawns and knights',
  },
  { word: 'television', hint: 'An electronic device for viewing broadcasts' },
  {
    word: 'hamburger',
    hint: 'A sandwich with a beef patty and various toppings',
  },
  { word: 'submarine', hint: 'A watercraft capable of underwater operation' },
  { word: 'keyboard', hint: 'An input device with keys used for typing' },
  { word: 'camera', hint: 'A device used to capture photographs or videos' },
  { word: 'telescope', hint: 'An instrument used to observe distant objects' },
  {
    word: 'train',
    hint: 'A series of connected vehicles that travel on tracks',
  },
  { word: 'piano', hint: 'A large musical instrument with keys' },
  { word: 'jungle', hint: 'A dense forest in a tropical region' },
  { word: 'beach', hint: 'A sandy area beside a body of water' },
  { word: 'rocket', hint: 'A spacecraft used for traveling to space' },
  {
    word: 'zebra',
    hint: 'A wild animal known for its black and white stripes',
  },
  { word: 'sandwich', hint: 'Two slices of bread with filling between them' },
  { word: 'globe', hint: 'A spherical model of the Earth' },
  {
    word: 'dragon',
    hint: 'A mythical creature often depicted as flying and breathing fire',
  },
  { word: 'balloon', hint: 'A flexible bag filled with air or gas' },
  { word: 'penguin', hint: 'A flightless bird that lives in cold regions' },
  { word: 'airplane', hint: 'A vehicle that flies through the air' },
  { word: 'puzzle', hint: 'A game or problem designed to test ingenuity' },
  { word: 'robot', hint: 'A machine capable of carrying out complex tasks' },
  { word: 'skyscraper', hint: 'A very tall building' },
  { word: 'microscope', hint: 'An instrument used to see tiny objects' },
  { word: 'chef', hint: 'A professional cook' },
  { word: 'giraffe', hint: 'An animal known for its long neck and legs' },
  {
    word: 'basketball',
    hint: 'A sport where players shoot a ball into a hoop',
  },
  { word: 'whale', hint: 'A large marine mammal' },
  { word: 'notebook', hint: 'A book for writing notes' },
  { word: 'sushi', hint: 'A Japanese dish with rice and seafood' },
  {
    word: 'sculpture',
    hint: 'Art made by shaping materials like clay or stone',
  },
  { word: 'train', hint: 'A mode of transport that runs on tracks' },
  { word: 'bridge', hint: 'A structure built to cross a river or road' },
  { word: 'cloud', hint: 'A visible mass of condensed water vapor' },
  { word: 'violin', hint: 'A string instrument played with a bow' },
  { word: 'stadium', hint: 'A large structure for sporting events' },
  { word: 'aircraft', hint: 'A vehicle capable of flight' },
  { word: 'campfire', hint: 'A fire used for camping' },
  { word: 'volcano', hint: 'A mountain with lava and ash eruptions' },
  { word: 'refrigerator', hint: 'An appliance used to keep food cold' },
  {
    word: 'mosaic',
    hint: 'Art made by assembling small pieces of colored glass or stone',
  },
  { word: 'cruise', hint: 'A vacation trip on a ship' },
  { word: 'dolphin', hint: 'A highly intelligent marine mammal' },
  { word: 'jigsaw', hint: 'A type of puzzle with interlocking pieces' },
  { word: 'glasses', hint: 'Eyewear used to correct vision' },
  {
    word: 'xylophone',
    hint: 'A musical instrument with wooden bars struck by mallets',
  },
  { word: 'garden', hint: 'An area where plants are grown' },
  { word: 'trophy', hint: 'A prize awarded for achievement' },
  { word: 'stadium', hint: 'A large venue for sports and concerts' },
  { word: 'helmet', hint: 'A protective headgear' },
  { word: 'microphone', hint: 'A device used to capture sound' },
  { word: 'dinosaur', hint: 'An extinct reptile from the Mesozoic Era' },
  { word: 'waterfall', hint: 'A flow of water over a cliff' },
  { word: 'mushroom', hint: 'A fungus with a cap and stem' },
  { word: 'violin', hint: 'A string instrument played with a bow' },
  { word: 'trampoline', hint: 'A device for bouncing and jumping' },
  { word: 'parrot', hint: 'A colorful bird known for mimicking sounds' },
  { word: 'sunflower', hint: 'A tall plant with a large yellow flower' },
  { word: 'astronaut', hint: 'A person trained to travel in space' },
  { word: 'cactus', hint: 'A plant with spines and adapted to dry conditions' },
  { word: 'puzzle', hint: 'A game or problem designed to test ingenuity' },
  { word: 'chameleon', hint: 'A lizard known for changing color' },
  { word: 'harp', hint: 'A stringed musical instrument played by plucking' },
  { word: 'jackal', hint: 'A wild animal related to dogs' },
  { word: 'spaghetti', hint: 'A type of Italian pasta' },
  { word: 'caterpillar', hint: 'The larval stage of a butterfly' },
  { word: 'telescope', hint: 'An instrument used to view distant objects' },
  { word: 'sandcastle', hint: 'A sculpture made of sand' },
  { word: 'sandal', hint: 'A type of open-toed footwear' },
  { word: 'paintbrush', hint: 'A tool used for painting' },
  { word: 'squirrel', hint: 'A small rodent with a bushy tail' },
  { word: 'magnet', hint: 'An object that attracts iron and steel' },
  { word: 'calendar', hint: 'A system for organizing days and months' },
  { word: 'lawnmower', hint: 'A machine used to cut grass' },
  { word: 'crystal', hint: 'A clear, hard substance often used in jewelry' },
  { word: 'conductor', hint: 'A person who leads an orchestra or train' },
  { word: 'octopus', hint: 'A sea creature with eight arms' },
  { word: 'scissors', hint: 'A tool used for cutting' },
  { word: 'keyboard', hint: 'An input device used for typing' },
  { word: 'whistle', hint: 'An object that produces a high-pitched sound' },
  { word: 'backpack', hint: 'A bag carried on the back' },
  { word: 'giraffe', hint: 'A tall African animal with a long neck' },
  { word: 'trolley', hint: 'A wheeled vehicle used for transporting goods' },
  { word: 'meerkat', hint: 'A small mammal known for standing upright' },
  { word: 'globe', hint: 'A spherical representation of Earth' },
  { word: 'skateboard', hint: 'A board mounted on wheels for riding' },
  { word: 'zipper', hint: 'A fastening device with interlocking teeth' },
  { word: 'zeppelin', hint: 'A large airship' },
  { word: 'ladder', hint: 'A device for climbing up or down' },
  { word: 'tulip', hint: 'A flower with colorful petals' },
  { word: 'chessboard', hint: 'A board used to play chess' },
  {
    word: 'sculpture',
    hint: 'Three-dimensional art made from materials like clay',
  },
  {
    word: 'pyramid',
    hint: 'A structure with a square base and triangular sides',
  },
  { word: 'submarine', hint: 'A vessel capable of underwater operation' },
  { word: 'carousel', hint: 'A rotating amusement ride with seats' },
  { word: 'laptop', hint: 'A portable computer' },
  { word: 'airplane', hint: 'A vehicle designed for air travel' },
  { word: 'fridge', hint: 'An appliance for keeping food cold' },
  { word: 'puzzle', hint: 'A game involving solving problems' },
  { word: 'mirror', hint: "A reflective surface used for seeing one's image" },
  { word: 'pendulum', hint: 'A swinging object used to measure time' },
  { word: 'lemon', hint: 'A yellow citrus fruit' },
  { word: 'notebook', hint: 'A book for writing notes' },
  { word: 'suitcase', hint: 'A bag used for carrying clothes when traveling' },
  { word: 'snowman', hint: 'A figure made of snow' },
  { word: 'teapot', hint: 'A container for brewing tea' },
  { word: 'whale', hint: 'A large marine mammal' },
  { word: 'beehive', hint: 'A structure where bees live and make honey' },
  { word: 'deck', hint: 'A flat surface on a ship or a platform' },
  { word: 'squirrel', hint: 'A small rodent with a bushy tail' },
  { word: 'windmill', hint: 'A structure with blades that turn in the wind' },
  { word: 'fireplace', hint: 'A space in a home where a fire can be built' },
  { word: 'feather', hint: 'A light, fluffy structure on birds' },
  { word: 'submarine', hint: 'A ship capable of underwater travel' },
  { word: 'bathtub', hint: 'A container for bathing' },
  { word: 'lighthouse', hint: 'A tower with a light to guide ships' },
  { word: 'spade', hint: 'A tool used for digging' },
  { word: 'scarf', hint: 'A piece of cloth worn around the neck' },
  { word: 'telescope', hint: 'An instrument used to view distant objects' },
  { word: 'trampoline', hint: 'A device used for bouncing and jumping' },
  { word: 'chef', hint: 'A person who cooks professionally' },
  {
    word: 'parrot',
    hint: 'A colorful bird known for its ability to mimic sounds',
  },
  { word: 'ladder', hint: 'A tool used for climbing up and down' },
  { word: 'puzzle', hint: 'A game that requires solving' },
  { word: 'keyboard', hint: 'An input device used for typing' },
  { word: 'drum', hint: 'A musical instrument that is beaten' },
  { word: 'cupcake', hint: 'A small cake designed to be eaten by one person' },
  { word: 'toothbrush', hint: 'A tool used for cleaning teeth' },
  { word: 'candle', hint: 'A wax stick with a wick that produces light' },
  { word: 'compass', hint: 'An instrument used for navigation' },
  { word: 'calendar', hint: 'A system for organizing days' },
  {
    word: 'telescope',
    hint: 'An optical instrument used to view distant objects',
  },
  { word: 'penguin', hint: 'A flightless bird that lives in cold regions' },
  { word: 'whistle', hint: 'A device that produces a high-pitched sound' },
  { word: 'hotairballoon', hint: 'A large balloon that carries passengers' },
  { word: 'coffeepot', hint: 'A vessel used for brewing coffee' },
  {
    word: 'guitar',
    hint: 'A string instrument played by strumming or plucking',
  },
  { word: 'television', hint: 'An electronic device for watching broadcasts' },
  { word: 'wrench', hint: 'A tool used for turning bolts' },
  { word: 'sunflower', hint: 'A tall plant with a large yellow flower' },
  {
    word: 'xylophone',
    hint: 'A musical instrument with bars struck by mallets',
  },
  { word: 'calculator', hint: 'A device used for mathematical calculations' },
  { word: 'blender', hint: 'A kitchen appliance for mixing foods' },
  { word: 'mushroom', hint: 'A fungus with a cap and stem' },
  { word: 'giraffe', hint: 'A tall African animal with a long neck' },
  { word: 'guitar', hint: 'A musical instrument with strings' },
  { word: 'wristwatch', hint: 'A timekeeping device worn on the wrist' },
  { word: 'dictionary', hint: 'A book that lists words and their meanings' },
  { word: 'notebook', hint: 'A book used for writing notes' },
  { word: 'puzzle', hint: 'A game involving pieces to be arranged' },
  { word: 'skateboard', hint: 'A board mounted on wheels for riding' },
  { word: 'whale', hint: 'A large marine mammal' },
  { word: 'mountain', hint: "A natural elevation of the Earth's surface" },
  {
    word: 'stethoscope',
    hint: 'A medical instrument used to listen to the heart',
  },
  { word: 'bagpipes', hint: 'A musical instrument with pipes and a bag' },
  { word: 'glasses', hint: 'Eyewear used to correct vision' },
  { word: 'lawnmower', hint: 'A machine used to cut grass' },
  { word: 'snowflake', hint: 'A crystal of snow' },
  { word: 'skateboard', hint: 'A board mounted on wheels for riding' },
  {
    word: 'magnifyingglass',
    hint: 'A lens used to make objects appear larger',
  },
  { word: 'mattress', hint: 'A cushion used for sleeping' },
  { word: 'eraser', hint: 'A tool used for removing pencil marks' },
  { word: 'whale', hint: 'A large marine mammal' },
  { word: 'helicopter', hint: 'A flying vehicle with rotating blades' },
  {
    word: 'telephone',
    hint: 'A device used for voice communication over distances',
  },
  {
    word: 'sculpture',
    hint: 'Three-dimensional art made from various materials',
  },
  { word: 'kettle', hint: 'A pot used for boiling water' },
  {
    word: 'telescope',
    hint: 'An optical instrument for viewing distant objects',
  },
  { word: 'lantern', hint: 'A portable light source' },
  {
    word: 'parachute',
    hint: 'A device used for slowing descent from a height',
  },
  { word: 'drum', hint: 'A percussion instrument' },
  {
    word: 'calculator',
    hint: 'An electronic device for performing mathematical operations',
  },
  { word: 'helmet', hint: 'A protective headgear' },
  { word: 'microscope', hint: 'An instrument used to view small objects' },
  { word: 'calculator', hint: 'An electronic device for calculations' },
  { word: 'teacup', hint: 'A small cup used for drinking tea' },
  {
    word: 'rainbow',
    hint: 'A meteorological phenomenon caused by reflection of sunlight in water droplets',
  },
  { word: 'butterfly', hint: 'A colorful insect with large wings' },
  { word: 'sailboat', hint: 'A boat with sails for wind-powered travel' },
  { word: 'airplane', hint: 'A vehicle designed for flying' },
];
