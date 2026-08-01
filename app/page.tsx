const items = [
  ["農機具", "トラクター・コンバイン・耕運機・草刈り機"],
  ["建設機械", "ユンボ・フォークリフト・クレーン・ダンプ"],
  ["工具・機械", "発電機・溶接機・コンプレッサー・チェーンソー"],
  ["車・バイク", "自動車・バイク・船外機・タイヤ・バッテリー"],
  ["金属全般", "鉄・アルミ・銅・真鍮・ステンレス・ケーブル"],
  ["その他", "除雪機・ボイラー・家電・楽器・陶磁器"],
];

export default function Home() {
  return (
    <main>
      <header className="header">
        <a className="brand" href="#top" aria-label="八王子商事 トップへ">
          <span className="brandMark">八</span>
          <span><b>八王子商事</b><small>北海道深川市の総合買取</small></span>
        </a>
        <a className="headerCall" href="tel:08048544777"><small>お気軽にお電話ください</small>080-4854-4777</a>
      </header>

      <section className="hero" id="top">
        <div className="heroInner">
          <p className="eyebrow">出張買取無料・査定相談受付中</p>
          <h1>その機械、鉄くず、<br /><em>まるごと買い取ります。</em></h1>
          <p className="lead">農機具・重機から金属、倉庫の片付けまで。<br className="desktop" />深川市を拠点に、幅広くご相談を承ります。</p>
          <div className="actions">
            <a className="primary" href="tel:08048544777"><span>電話で無料相談</span><b>080-4854-4777</b></a>
            <a className="secondary" href="#items">買取品目を見る <span>↓</span></a>
          </div>
          <div className="trust"><span>出張無料</span><span>物々交換OK</span><span>片付け・解体相談</span></div>
        </div>
        <div className="heroGraphic" aria-hidden="true"><div className="sun" /><div className="machine"><span /><i /></div><div className="ground" /></div>
      </section>

      <section className="items section" id="items">
        <div className="sectionHead"><p>WHAT WE BUY</p><h2>こんなものを買い取ります</h2><span>動かない・古い・量が多い場合も、まずはご相談ください。</span></div>
        <div className="itemGrid">
          {items.map(([title, text], index) => <article key={title}><div className="number">0{index + 1}</div><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="features">
        <div><b>01</b><h3>出張買取無料</h3><p>現地まで伺い、その場で査定。大型機械や大量の金属もご相談ください。</p></div>
        <div><b>02</b><h3>幅広い買取品目</h3><p>農機・建機・工具・車両・金属類など、まとめて査定できます。</p></div>
        <div><b>03</b><h3>片付けも相談可能</h3><p>倉庫や工場の片付け、解体に伴う一括買取にも対応します。</p></div>
      </section>

      <section className="flow section">
        <div className="sectionHead"><p>HOW IT WORKS</p><h2>買取までの流れ</h2></div>
        <ol><li><b>1</b><span><strong>お電話でご相談</strong>品物・場所・状態をお聞かせください。</span></li><li><b>2</b><span><strong>無料で出張査定</strong>日程を調整し、現地で確認します。</span></li><li><b>3</b><span><strong>ご納得後に買取</strong>査定内容をご説明し、お引き取りします。</span></li></ol>
      </section>

      <section className="contact">
        <div><p>まずはお気軽にご相談ください</p><h2>売れるか分からないものも、<br />お電話一本で確認できます。</h2><a href="tel:08048544777"><small>電話受付</small>080-4854-4777</a></div>
        <aside><h3>八王子商事</h3><dl><dt>所在地</dt><dd>北海道深川市湯内1710-1</dd><dt>事業内容</dt><dd>農機具・建設機械・工具・車両・金属類などの買取</dd></dl><a href="https://www.google.com/maps/search/?api=1&query=%E5%8C%97%E6%B5%B7%E9%81%93%E6%B7%B1%E5%B7%9D%E5%B8%82%E6%B9%AF%E5%86%851710-1" target="_blank" rel="noreferrer">地図で場所を確認する →</a></aside>
      </section>

      <footer><span>八王子商事</span><small>© 2026 Hachioji Shoji. All Rights Reserved.</small></footer>
      <a className="mobileCall" href="tel:08048544777"><small>タップして電話</small><b>080-4854-4777</b></a>
    </main>
  );
}
