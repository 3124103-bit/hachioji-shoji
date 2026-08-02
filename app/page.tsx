const asset = (name: string) => `/assets/photos/${name}`;

export default function Home() {
  return (
    <main>
      <header className="header">
        <a className="brand" href="#top"><span className="brandMark">八</span><span><b>八王子商事</b><small>買取・片付け・倉庫解体</small></span></a>
        <nav aria-label="メインメニュー"><a href="#services">サービス</a><a href="#items">買取品目</a><a href="#area">対応地域</a><a href="#company">会社情報</a></nav>
        <a className="headerCall" href="tel:08048544777"><small>お気軽にお電話ください</small>080-4854-4777</a>
      </header>

      <section className="hero" id="top">
        <img className="heroPhoto" src={asset("hero-tractors.jpg")} alt="八王子商事が取り扱う複数のトラクター" />
        <div className="heroShade" />
        <div className="heroInner"><p className="eyebrow">法人・事業者歓迎｜出張見積もり無料</p><h1>片付けから買取まで、<br /><em>まとめてお任せください。</em></h1><p className="lead">倉庫・工場の整理、農機具・建設機械・鉄くずの買取、ビニールハウス・倉庫の解体まで。<br className="desktop" />「何が売れるか分からない」という段階から、丸ごとご相談いただけます。</p><div className="actions"><a className="primary" href="tel:08048544777"><span>電話で無料相談</span><b>080-4854-4777</b></a><a className="secondary" href="mailto:hachiojishoji@gmail.com?subject=買取・片付けの相談">写真を添えてメール相談 <span>→</span></a></div><div className="trust"><span>幅広い品目</span><span>物々交換OK</span><span>片付け・倉庫解体も相談</span></div></div>
      </section>

      <section className="intro section"><p className="sectionLabel">ONE-STOP SERVICE</p><div className="introGrid"><h2>仕分け前の状態から、<br />現場ごとまとめて相談。</h2><p>機械や金属だけを選び出す必要はありません。倉庫や工場、事業所に残った品物を、そのままの状態からご相談いただけます。片付けや搬出、ビニールハウス・倉庫の解体も含めて対応します。</p></div></section>

      <section className="services" id="services">
        <article><span>01</span><h3>買取</h3><p>農機具、建設機械、工具、車両、金属類、設備、雑貨などを幅広く査定します。</p></article>
        <article><span>02</span><h3>倉庫・工場の片付け</h3><p>仕分け、買取、搬出まで一括相談。法人・事業者からのまとまったご依頼も歓迎します。</p></article>
        <article><span>03</span><h3>ビニールハウス・倉庫の解体</h3><p>ビニールハウスや倉庫などを解体。状態の良いビニールハウスは、買取できる場合もあります。</p></article>
        <article className="barter"><span>04</span><h3>物々交換</h3><p>品物同士の交換もご相談ください。現金だけではない、柔軟な取引に対応します。</p></article>
      </section>

      <section className="photoStory section"><div className="storyImage"><img src={asset("mixed-tools.jpg")} alt="まとめて置かれた草刈機やポンプなどの機械類" /></div><div className="storyCopy"><p className="sectionLabel">AS-IS IS OK</p><h2>古い、動かない、<br />種類が分からない。<br /><em>そのままで大丈夫です。</em></h2><p>サビている物、長年置いたままの物、大量にある物も、写真や現地の状況から確認します。掲載されていない品物も、まずは写真やお電話でご相談ください。</p><a href="mailto:hachiojishoji@gmail.com?subject=写真査定の相談">写真を送って相談する →</a></div></section>

      <section className="items section" id="items"><div className="sectionHead"><p>WHAT WE BUY</p><h2>買取品目の一例</h2><span>ここにない物でも構いません。幅広く査定します。</span></div><div className="itemGrid">
        <article><img src={asset("hero-tractors.jpg")} alt="トラクターなどの農機具" /><div><span>01</span><h3>農機具</h3><p>トラクター、コンバイン、耕運機、草刈機、運搬機、除雪機など</p></div></article>
        <article><img src={asset("excavator.jpg")} alt="油圧ショベルなどの建設機械" /><div><span>02</span><h3>建設・工業機械</h3><p>ユンボ、フォークリフト、発電機、溶接機、コンプレッサーなど</p></div></article>
        <article><img src={asset("mixed-tools.jpg")} alt="草刈機やポンプなどの工具・機械" /><div><span>03</span><h3>工具・設備</h3><p>チェーンソー、モーター、給湯器、エアコン、電気機器など</p></div></article>
        <article><img src={asset("vehicle.jpg")} alt="買取対象となる白い乗用車" /><div><span>04</span><h3>車両</h3><p>乗用車、トラック、バイク、船外機、タイヤ、ホイールなど</p></div></article>
        <article><img src={asset("antiques.jpg")} alt="陶磁器や置物などの品物" /><div><span>05</span><h3>その他</h3><p>楽器、陶磁器、骨董品、雑貨など。掲載のない品物もご相談ください。</p></div></article>
      </div></section>

      <section className="metals"><div className="metalsPhoto"><img src={asset("cleanup.jpg")} alt="片付け現場の木材や資材" /></div><div className="metalsCopy"><p className="sectionLabel">METAL & SCRAP</p><h2>金属くず・資源類も<br />幅広く取り扱います</h2><div className="metalLists"><div><h3>銅・電線</h3><p>ピカ銅、込銅、真鍮、砲金、皮付き銅、各種電線、VA線、ハーネス</p></div><div><h3>アルミ・鉄</h3><p>アルミガラ、サッシ、ホイール、アルミ缶、鉄くず、ステンレス</p></div><div><h3>機械・電装品</h3><p>モーター、ラジエーター、ブレーカー、基板、バッテリー、鉛、給湯器</p></div></div><small>※上記は一例です。種類や状態が分からない物、複数の素材が混ざった物もご相談ください。</small></div></section>

      <section className="sale section"><div><p className="sectionLabel">FOR SALE</p><h2>中古機械・工具を<br />販売しています</h2><p>販売中の商品と現在の価格はヤフオクでご確認いただけます。在庫状況はヤフオクの出品ページが最新です。</p><a className="yahooButton" href="https://auctions.yahoo.co.jp/seller/37syEdbg2ugoxR4dRLEEnTGePparZ?user_type=c" target="_blank" rel="noopener noreferrer">ヤフオク出品中の商品を見る <span>↗</span></a></div><img src={asset("snowblower.jpg")} alt="販売・買取対象となる除雪機" /></section>

      <section className="area section" id="area"><div className="sectionHead"><p>SERVICE AREA</p><h2>季節に合わせて2拠点から対応</h2><span>距離や品物の内容によって対応可否を確認します。まずはお問い合わせください。</span></div><div className="areaGrid"><article><b>3月〜11月</b><h3>北海道</h3><p>北海道深川市湯内1710-1を拠点に対応</p><a href="https://www.google.com/maps/search/?api=1&query=北海道深川市湯内1710-1" target="_blank" rel="noopener noreferrer">地図で確認 →</a></article><article><b>11月〜3月</b><h3>新潟・周辺地域</h3><p>新潟県上越市小泉615を拠点に、富山・山梨・関東方面も内容により相談可能</p><a href="https://www.google.com/maps/search/?api=1&query=新潟県上越市小泉615" target="_blank" rel="noopener noreferrer">地図で確認 →</a></article></div></section>

      <section className="flow section"><div className="sectionHead"><p>HOW IT WORKS</p><h2>ご相談から作業・買取まで</h2></div><ol><li><b>1</b><span><strong>電話・メールで相談</strong>品物、場所、状態をお知らせください。写真があるとスムーズです。</span></li><li><b>2</b><span><strong>写真査定・必要に応じて現地確認</strong>写真やお伺いした内容から確認し、必要な場合は現地で見積もります。</span></li><li><b>3</b><span><strong>作業・買取</strong>内容にご納得いただいてから、搬出や片付けを行います。</span></li></ol></section>

      <section className="contact" id="company"><div><p>まずはお気軽にご相談ください</p><h2>売れるか分からない物も、<br />写真や電話から相談できます。</h2><div className="contactButtons"><a href="tel:08048544777"><small>電話受付</small>080-4854-4777</a><a className="mailButton" href="mailto:hachiojishoji@gmail.com?subject=買取・片付けの相談"><small>写真添付も歓迎</small>メールで相談する</a></div></div><aside><h3>八王子商事</h3><dl><dt>代表者</dt><dd>池増龍一</dd><dt>電話</dt><dd>080-4854-4777</dd><dt>メール</dt><dd><a href="mailto:hachiojishoji@gmail.com">hachiojishoji@gmail.com</a></dd><dt>北海道拠点</dt><dd>北海道深川市湯内1710-1</dd><dt>新潟拠点</dt><dd>新潟県上越市小泉615</dd><dt>許可</dt><dd>金属くず回収業者<br />北海道公安委員会許可 （金）第123080000017号<br /><br />古物商<br />栃木県公安委員会許可 第411080000986号</dd></dl></aside></section>
      <footer><span>八王子商事</span><small>© 2026 Hachioji Shoji. All Rights Reserved.</small></footer><a className="mobileCall" href="tel:08048544777"><small>タップして電話</small><b>080-4854-4777</b></a>
    </main>
  );
}
