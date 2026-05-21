const flashcard = document.getElementById('flashcard');
const wordText = document.getElementById('wordText');
const wordMeaning = document.getElementById('wordMeaning');
const wordPart = document.getElementById('wordPart');
const wordSentence = document.getElementById('wordSentence');
const wordRoot = document.getElementById('wordRoot');
const wordRootPreview = document.getElementById('wordRootPreview');
const progressText = document.getElementById('progressText');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const wordRelated = document.getElementById('wordRelated');

const cards = [
  { english: 'abundant', chinese: '豐富的；充足的', part: 'adj.', sentence: 'The forest is abundant with wildlife.', root: 'ab- (away) + undant (wave), 豐富。' },
  { english: 'adapt', chinese: '適應；改編', part: 'v.', sentence: 'She adapted quickly to the new school.', root: 'ad- (to) + apt (fit)。' },
  { english: 'analyze', chinese: '分析', part: 'v.', sentence: 'We need to analyze the data carefully.', root: 'ana- (up/back) + lyze (loosen)。' },
  { english: 'anticipate', chinese: '預期，期待', part: 'v.', sentence: 'They anticipate a positive result.', root: 'ante- (before) + cipate (take)。' },
  { english: 'apply', chinese: '應用；申請', part: 'v.', sentence: 'Please apply the paint evenly.', root: 'ap- (to) + ply (fold)。' },
  { english: 'assess', chinese: '評估', part: 'v.', sentence: 'The teacher will assess the project.', root: 'as- (toward) + sess (sit)。' },
  { english: 'assume', chinese: '假定；承擔', part: 'v.', sentence: 'I assume you have read the report.', root: 'as- (to) + sume (take)。' },
  { english: 'attain', chinese: '達到；獲得', part: 'v.', sentence: 'He attained his goal after months of work.', root: 'at- (to) + tain (hold)。' },
  { english: 'aware', chinese: '意識到的', part: 'adj.', sentence: 'She was aware of the problem.', root: 'a- (to) + ware (aware)。' },
  { english: 'behave', chinese: '表現；舉止', part: 'v.', sentence: 'Children should behave politely.', root: 'be- + have (hold, have)。' },
  { english: 'benefit', chinese: '好處；受益', part: 'n.', sentence: 'The new policy brings many benefits.', root: 'bene- (good) + fit (do)。' },
  { english: 'capacity', chinese: '容量；能力', part: 'n.', sentence: 'The hall has a capacity of 200 people.', root: 'cap- (take) + -ity (state)。' },
  { english: 'challenge', chinese: '挑戰', part: 'n.', sentence: 'Learning a language is a challenge.', root: 'call (summon) + -enge (act)。' },
  { english: 'clarify', chinese: '釐清；闡明', part: 'v.', sentence: 'Can you clarify your idea?', root: 'clar- (clear) + -ify (make)。' },
  { english: 'collaborate', chinese: '合作', part: 'v.', sentence: 'They collaborate on the new project.', root: 'co- (together) + labor (work) + -ate。' },
  { english: 'commence', chinese: '開始', part: 'v.', sentence: 'The event will commence at nine.', root: 'com- (together) + mence (begin)。' },
  { english: 'commit', chinese: '承諾；投入', part: 'v.', sentence: 'He committed to finishing the task.', root: 'com- (together) + mit (send)。' },
  { english: 'communicate', chinese: '溝通', part: 'v.', sentence: 'We communicate via email every day.', root: 'com- (together) + municate (share)。' },
  { english: 'compare', chinese: '比較', part: 'v.', sentence: 'Compare the two answers carefully.', root: 'com- (together) + pare (equal)。' },
  { english: 'compete', chinese: '競爭', part: 'v.', sentence: 'Companies compete for customers.', root: 'com- (together) + pete (seek)。' },
  { english: 'complex', chinese: '複雜的', part: 'adj.', sentence: 'The problem is too complex to solve quickly.', root: 'com- (together) + plex (fold)。' },
  { english: 'compose', chinese: '組成；創作', part: 'v.', sentence: 'She composes music in her free time.', root: 'com- (together) + pose (put)。' },
  { english: 'concept', chinese: '概念', part: 'n.', sentence: 'The concept is simple and clear.', root: 'con- (together) + cept (take)。' },
  { english: 'conclude', chinese: '結束；推斷', part: 'v.', sentence: 'We conclude the meeting at five.', root: 'con- (together) + clude (close)。' },
  { english: 'conduct', chinese: '引導；進行', part: 'v.', sentence: 'The teacher conducts the class well.', root: 'con- (together) + duct (lead)。' },
  { english: 'conference', chinese: '會議', part: 'n.', sentence: 'The conference starts tomorrow.', root: 'con- (together) + fer (carry) + -ence。' },
  { english: 'confirm', chinese: '確認', part: 'v.', sentence: 'Please confirm your reservation.', root: 'con- (together) + firm (strong)。' },
  { english: 'connect', chinese: '連接', part: 'v.', sentence: 'This cable connects the two devices.', root: 'con- (together) + nect (bind)。' },
  { english: 'consider', chinese: '考慮', part: 'v.', sentence: 'Consider the consequences carefully.', root: 'con- (together) + sider (look)。' },
  { english: 'consist', chinese: '由...組成', part: 'v.', sentence: 'The team consists of six members.', root: 'con- (together) + sist (stand)。' },
  { english: 'construct', chinese: '建造；構成', part: 'v.', sentence: 'They construct a new bridge.', root: 'con- (together) + struct (build)。' },
  { english: 'consult', chinese: '諮詢', part: 'v.', sentence: 'Consult your teacher if you are unsure.', root: 'con- (together) + sult (ask)。' },
  { english: 'contain', chinese: '包含；容納', part: 'v.', sentence: 'The box contains many books.', root: 'con- (together) + tain (hold)。' },
  { english: 'continue', chinese: '繼續', part: 'v.', sentence: 'Continue reading the next chapter.', root: 'con- (together) + tinue (stretch)。' },
  { english: 'contract', chinese: '合約；收縮', part: 'n.', sentence: 'They signed a contract yesterday.', root: 'con- (together) + tract (draw)。' },
  { english: 'contribute', chinese: '貢獻；捐助', part: 'v.', sentence: 'They contribute ideas at meetings.', root: 'con- (together) + tribute (give)。' },
  { english: 'convince', chinese: '說服', part: 'v.', sentence: 'She convinced him to join the team.', root: 'con- (together) + vince (conquer)。' },
  { english: 'cooperate', chinese: '合作', part: 'v.', sentence: 'We cooperate on the new design.', root: 'co- (together) + operate (work)。' },
  { english: 'create', chinese: '創造', part: 'v.', sentence: 'He creates beautiful paintings.', root: 'cre- (make)。' },
  { english: 'culture', chinese: '文化', part: 'n.', sentence: 'The city has a rich culture.', root: 'cult- (cultivate) + -ure (process)。' },
  { english: 'decline', chinese: '下降；拒絕', part: 'v.', sentence: 'Sales declined last month.', root: 'de- (down) + cline (lean)。' },
  { english: 'define', chinese: '定義', part: 'v.', sentence: 'Define the term in one sentence.', root: 'de- (down) + fine (limit)。' },
  { english: 'deliver', chinese: '交付；傳遞', part: 'v.', sentence: 'The courier delivered the package.', root: 'de- (down) + liver (free).'},
  { english: 'demand', chinese: '要求；需求', part: 'n.', sentence: 'There is high demand for the product.', root: 'de- (down) + mand (order)。' },
  { english: 'depend', chinese: '依賴；取決於', part: 'v.', sentence: 'It depends on the weather.', root: 'de- (down) + pend (hang)。' },
  { english: 'describe', chinese: '描述', part: 'v.', sentence: 'She described the scene clearly.', root: 'de- (down) + scribe (write)。' },
  { english: 'design', chinese: '設計', part: 'v.', sentence: 'He will design a new logo.', root: 'de- (down) + sign (mark)。' },
  { english: 'desire', chinese: '渴望；慾望', part: 'n.', sentence: 'She has a strong desire to learn.', root: 'de- (down) + sire (long for)。' },
  { english: 'detail', chinese: '細節', part: 'n.', sentence: 'Give me the details of the plan.', root: 'de- (down) + tail (cut).'},
  { english: 'develop', chinese: '發展', part: 'v.', sentence: 'The town has developed rapidly.', root: 'de- (down) + velop (unwrap).'},
  { english: 'differ', chinese: '不同', part: 'v.', sentence: 'Opinions differ among members.', root: 'dif- (apart) + fer (carry).'},
  { english: 'digest', chinese: '消化；領會', part: 'v.', sentence: 'I need time to digest the news.', root: 'di- (apart) + gest (carry).'},
  { english: 'direct', chinese: '直接的；指導', part: 'adj.', sentence: 'He gave direct instructions.', root: 'di- (apart) + rect (straight).'},
  { english: 'discover', chinese: '發現', part: 'v.', sentence: 'They discovered a hidden room.', root: 'dis- (apart) + cover (uncover).'},
  { english: 'discuss', chinese: '討論', part: 'v.', sentence: 'We discuss the plan every week.', root: 'dis- (apart) + cuss (shake).'},
  { english: 'display', chinese: '顯示；展示', part: 'v.', sentence: 'The gallery displays new art.', root: 'dis- (apart) + play (show).'},
  { english: 'distribute', chinese: '分發', part: 'v.', sentence: 'They distribute flyers on the street.', root: 'dis- (apart) + tribute (give).'},
  { english: 'diverse', chinese: '多樣的', part: 'adj.', sentence: 'The team has a diverse background.', root: 'di- (apart) + verse (turn).'},
  { english: 'divide', chinese: '分隔', part: 'v.', sentence: 'Divide the cake into eight pieces.', root: 'di- (apart) + vide (separate).'},
  { english: 'economy', chinese: '經濟', part: 'n.', sentence: 'The economy is improving slowly.', root: 'eco- (house) + nomy (law).'},
  { english: 'educate', chinese: '教育', part: 'v.', sentence: 'The school educates children well.', root: 'e- (out) + ducate (lead).'},
  { english: 'effect', chinese: '效果；影響', part: 'n.', sentence: 'The effect was immediately visible.', root: 'ef- (to) + fect (make).'},
  { english: 'effort', chinese: '努力', part: 'n.', sentence: 'She put a lot of effort into the task.', root: 'ef- (to) + fort (strength).'},
  { english: 'employ', chinese: '雇用；使用', part: 'v.', sentence: 'The company employs many workers.', root: 'em- (in) + ploy (use).'},
  { english: 'enable', chinese: '使能夠', part: 'v.', sentence: 'The new software enables faster work.', root: 'en- (make) + able (capable).'},
  { english: 'encourage', chinese: '鼓勵', part: 'v.', sentence: 'Parents encourage their children.', root: 'en- (make) + courage (heart).'},
  { english: 'enhance', chinese: '提高；增強', part: 'v.', sentence: 'Good lighting enhances the room.', root: 'en- (make) + hance (high).'},
  { english: 'ensure', chinese: '確保', part: 'v.', sentence: 'Ensure the door is locked.', root: 'en- (make) + sure (certain).'},
  { english: 'entertain', chinese: '娛樂', part: 'v.', sentence: 'The show will entertain the audience.', root: 'en- (make) + tertain (hold).'},
  { english: 'establish', chinese: '建立', part: 'v.', sentence: 'They established a new company.', root: 'e- (out) + stablish (stand).'},
  { english: 'estimate', chinese: '估計', part: 'v.', sentence: 'Estimate the cost before buying.', root: 'e- (out) + stimate (value).'},
  { english: 'evaluate', chinese: '評估', part: 'v.', sentence: 'Evaluate the results carefully.', root: 'e- (out) + valuate (value).'},
  { english: 'examine', chinese: '檢查；考察', part: 'v.', sentence: 'The doctor examines the patient.', root: 'ex- (out) + amine (take).'},
  { english: 'exceed', chinese: '超過', part: 'v.', sentence: 'The price exceeded my budget.', root: 'ex- (out) + ceed (go).'},
  { english: 'exclude', chinese: '排除', part: 'v.', sentence: 'Please exclude this item from the list.', root: 'ex- (out) + clude (close).'},
  { english: 'expand', chinese: '擴展', part: 'v.', sentence: 'The company plans to expand next year.', root: 'ex- (out) + pand (spread).'},
  { english: 'expect', chinese: '期待；期望', part: 'v.', sentence: 'We expect good news soon.', root: 'ex- (out) + pect (look).'},
  { english: 'explain', chinese: '解釋', part: 'v.', sentence: 'He explained the rules clearly.', root: 'ex- (out) + plain (clear).'},
  { english: 'explore', chinese: '探索', part: 'v.', sentence: 'They explore new ideas together.', root: 'ex- (out) + plore (search).'},
  { english: 'express', chinese: '表達；快速的', part: 'v.', sentence: 'She expresses her thoughts well.', root: 'ex- (out) + press (press).'},
  { english: 'extend', chinese: '延長；擴展', part: 'v.', sentence: 'We extend the deadline by two days.', root: 'ex- (out) + tend (stretch).'},
  { english: 'factor', chinese: '因素', part: 'n.', sentence: 'Price is a major factor in the decision.', root: 'fac- (make/do) + -tor (agent).'},
  { english: 'feature', chinese: '特徵；特色', part: 'n.', sentence: 'A key feature is the large screen.', root: 'fea- (form) + -ture (result).'},
  { english: 'finance', chinese: '財務；資金', part: 'n.', sentence: 'She works in finance.', root: 'fin- (end/bound) + ance (state).'},
  { english: 'focus', chinese: '焦點；集中', part: 'n.', sentence: 'The focus of the lesson is verbs.', root: 'focus (hearth/fire), 中心。'},
  { english: 'frequent', chinese: '頻繁的', part: 'adj.', sentence: 'He makes frequent visits to the library.', root: 'fre- (often) + quent (come).'},
  { english: 'function', chinese: '功能；作用', part: 'n.', sentence: 'This app has many functions.', root: 'func- (perform) + -tion (state).'},
  { english: 'generate', chinese: '產生', part: 'v.', sentence: 'This machine generates electricity.', root: 'gen- (birth) + erate (make).'},
  { english: 'gesture', chinese: '手勢', part: 'n.', sentence: 'She made a friendly gesture.', root: 'gest- (carry) + -ure (action).'},
  { english: 'guide', chinese: '引導；指南', part: 'v.', sentence: 'A teacher guides the students.', root: 'guid- (lead).'},
  { english: 'habit', chinese: '習慣', part: 'n.', sentence: 'He has a healthy habit of reading.', root: 'hab- (have/hold).'},
  { english: 'identify', chinese: '辨認；確認', part: 'v.', sentence: 'Can you identify the animal?', root: 'id- (same) + entify (make).'},
  { english: 'imagine', chinese: '想像', part: 'v.', sentence: 'Imagine a world without phones.', root: 'imag- (image).'},
  { english: 'impact', chinese: '影響；衝擊', part: 'n.', sentence: 'The decision had a big impact.', root: 'im- (in) + pact (pack).'},
  { english: 'improve', chinese: '改善', part: 'v.', sentence: 'Practice improves your skills.', root: 'im- (in) + prove (prove).'},
  { english: 'include', chinese: '包括', part: 'v.', sentence: 'The package includes a manual.', root: 'in- (in) + clude (close).'},
  { english: 'influence', chinese: '影響力；影響', part: 'n.', sentence: 'Her speech had a strong influence.', root: 'in- (in) + fluence (flow).'},
  { english: 'inform', chinese: '告知；通知', part: 'v.', sentence: 'Please inform me of any changes.', root: 'in- (in) + form (shape).'},
  { english: 'install', chinese: '安裝', part: 'v.', sentence: 'They install the new software today.', root: 'in- (in) + stall (stand).'}
];

let currentIndex = 0;

function renderCard() {
  const card = cards[currentIndex];
  wordText.textContent = card.english;
  wordMeaning.textContent = card.chinese;
  wordPart.textContent = card.part;
  wordSentence.textContent = card.sentence;
  wordRoot.textContent = card.root;
  wordRootPreview.textContent = `字根：${card.root}`;
  wordRelated.textContent = card.related || '無相關單字資訊。';
  progressText.textContent = `${currentIndex + 1} / ${cards.length}`;
}

function isChinese(text) {
  return /[\u4e00-\u9fff]/.test(text);
}

async function fetchTranslation(text, from, to) {
  try {
    const response = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${from}|${to}`);
    const data = await response.json();
    return data.responseData?.translatedText || '';
  } catch (error) {
    return '';
  }
}

async function fetchDictionary(word) {
  try {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word.toLowerCase())}`);
    if (!response.ok) {
      throw new Error('dictionary not found');
    }
    const data = await response.json();
    const entry = data[0];
    const meaning = entry.meanings[0];
    const definition = meaning.definitions[0]?.definition || '';
    const example = meaning.definitions.find(def => def.example)?.example || meaning.definitions[0]?.example || '';
    const synonyms = meaning.definitions[0]?.synonyms || meaning.synonyms || [];
    return {
      word: entry.word,
      part: meaning.partOfSpeech || '--',
      definition,
      example,
      synonyms,
    };
  } catch (error) {
    return null;
  }
}

async function fetchRelatedWords(word) {
  try {
    const response = await fetch(`https://api.datamuse.com/words?ml=${encodeURIComponent(word)}&max=6`);
    const data = await response.json();
    return data.map(item => item.word).slice(0, 5);
  } catch (error) {
    return [];
  }
}

function deriveRoot(word) {
  const commonRoots = ['re', 'un', 'in', 'im', 'dis', 'pre', 'mis', 'sub', 'inter', 'trans', 'auto', 'bio', 'tele', 'micro', 'macro', 'semi'];
  const lower = word.toLowerCase();
  const matched = commonRoots.find(root => lower.startsWith(root));
  if (matched) {
    return `${matched}- (可能字根) + ${lower.slice(matched.length)} (詞幹)`;
  }
  if (lower.length > 5) {
    return `${lower.slice(0, 3)}- (字首) + ${lower.slice(3)} (詞幹)`;
  }
  return '暫無字根資訊。';
}

async function searchWord() {
  const rawInput = searchInput.value.trim();
  if (!rawInput) {
    alert('請輸入中文或英文單字。');
    return;
  }

  flashcard.classList.remove('is-flipped');
  wordText.textContent = '搜尋中...';
  wordMeaning.textContent = '請稍候。';
  wordPart.textContent = '--';
  wordSentence.textContent = '搜尋中...';
  wordRoot.textContent = '搜尋中...';
  wordRelated.textContent = '搜尋中...';

  const isZh = isChinese(rawInput);
  let englishWord = rawInput;
  let chineseText = rawInput;
  let result = null;

  let translationText = chineseText;

  if (isZh) {
    const translated = await fetchTranslation(rawInput, 'zh', 'en');
    englishWord = translated || rawInput;
    const dictionary = await fetchDictionary(englishWord);
    translationText = chineseText;
    result = dictionary || {
      word: englishWord,
      part: '--',
      definition: '暫無英文定義。',
      example: '暫無例句。',
      synonyms: [],
    };
  } else {
    const dictionary = await fetchDictionary(rawInput);
    const translated = await fetchTranslation(rawInput, 'en', 'zh');
    translationText = translated || '無法取得中文翻譯';
    result = dictionary || {
      word: rawInput,
      part: '--',
      definition: '暫無英文定義。',
      example: '暫無例句。',
      synonyms: [],
    };
  }

  const related = await fetchRelatedWords(result.word || englishWord);
  const root = deriveRoot(result.word || englishWord);

  wordText.textContent = result.word || englishWord;
  wordMeaning.textContent = isZh ? translationText : translationText;
  wordPart.textContent = result.part || '--';
  wordSentence.textContent = result.example || '暫無例句。';
  wordRoot.textContent = root;
  wordRootPreview.textContent = `字根：${root}`;
  wordRelated.textContent = related.length ? related.join('、') : '暫無相關單字。';
}

function flipCard() {
  flashcard.classList.toggle('is-flipped');
}

function showNextCard() {
  if (currentIndex < cards.length - 1) {
    currentIndex += 1;
  } else {
    currentIndex = 0;
  }
  flashcard.classList.remove('is-flipped');
  renderCard();
}

function showPreviousCard() {
  if (currentIndex > 0) {
    currentIndex -= 1;
  } else {
    currentIndex = cards.length - 1;
  }
  flashcard.classList.remove('is-flipped');
  renderCard();
}

flashcard.addEventListener('click', flipCard);
flashcard.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    flipCard();
  }
});

prevBtn.addEventListener('click', showPreviousCard);
nextBtn.addEventListener('click', showNextCard);
searchBtn.addEventListener('click', searchWord);
searchInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    searchWord();
  }
});

renderCard();
