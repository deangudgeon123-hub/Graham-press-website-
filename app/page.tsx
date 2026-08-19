"use client";

import { useMemo, useState } from "react";

type ProductKey = "copies" | "flyers" | "cards" | "posters" | "laminating";

const products: Record<
  ProductKey,
  { name: string; quantities: { label: string; price: number }[] }
> = {
  copies: {
    name: "A4 colour copies",
    quantities: [
      { label: "25", price: 12.5 },
      { label: "50", price: 22 },
      { label: "100", price: 38 },
      { label: "250", price: 82 },
      { label: "500", price: 145 },
    ],
  },
  flyers: {
    name: "A5 colour flyers",
    quantities: [
      { label: "25", price: 18 },
      { label: "50", price: 24 },
      { label: "100", price: 35 },
      { label: "250", price: 55 },
      { label: "500", price: 75 },
    ],
  },
  cards: {
    name: "Business cards",
    quantities: [
      { label: "50", price: 24 },
      { label: "100", price: 29 },
      { label: "250", price: 39 },
      { label: "500", price: 49 },
      { label: "1,000", price: 69 },
    ],
  },
  posters: {
    name: "A3 colour posters",
    quantities: [
      { label: "1", price: 8 },
      { label: "5", price: 32 },
      { label: "10", price: 58 },
      { label: "25", price: 125 },
      { label: "50", price: 225 },
    ],
  },
  laminating: {
    name: "A4 laminating",
    quantities: [
      { label: "1", price: 2 },
      { label: "5", price: 8 },
      { label: "10", price: 15 },
      { label: "25", price: 32 },
      { label: "50", price: 55 },
    ],
  },
};

const services = [
  {
    marker: "A4",
    title: "Copies & documents",
    text: "Crisp black & white or full colour, from a single page to larger runs.",
    price: "from 15p",
  },
  {
    marker: "✦",
    title: "Flyers & leaflets",
    text: "Promote an event, offer or business with vibrant, professionally finished print.",
    price: "from £18",
  },
  {
    marker: "GP",
    title: "Business stationery",
    text: "Business cards, letterheads, compliment slips and branded essentials.",
    price: "from £24",
  },
  {
    marker: "A1",
    title: "Posters & large format",
    text: "Make an impact with posters, display graphics and large-format digital print.",
    price: "from £8",
  },
  {
    marker: "∞",
    title: "Binding",
    text: "Smart comb and wire binding for reports, presentations, menus and manuals.",
    price: "from £4",
  },
  {
    marker: "▣",
    title: "Laminating",
    text: "Durable protection for notices, menus, certificates and frequently handled print.",
    price: "from £2",
  },
  {
    marker: "♥",
    title: "Wedding stationery",
    text: "Invitations, orders of service and table stationery made personal to your day.",
    price: "quoted to suit",
  },
  {
    marker: "Aa",
    title: "Design service",
    text: "No artwork? No problem. Get practical, experienced help bringing the idea together.",
    price: "from £15",
  },
];

const quickPrices = [
  ["A4 black & white copy", "from 15p"],
  ["A4 colour copy", "from 50p"],
  ["A4 laminating", "from £2"],
  ["Comb binding", "from £4"],
  ["100 A5 flyers", "from £35"],
  ["100 business cards", "from £29"],
];

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  const [product, setProduct] = useState<ProductKey>("flyers");
  const [quantityIndex, setQuantityIndex] = useState(2);
  const [finish, setFinish] = useState("standard");

  const selected = products[product];
  const safeIndex = Math.min(quantityIndex, selected.quantities.length - 1);
  const quantity = selected.quantities[safeIndex];
  const estimate = useMemo(() => {
    const multiplier = finish === "premium" ? 1.18 : 1;
    const design = finish === "design" ? 15 : 0;
    return Math.ceil(quantity.price * multiplier + design);
  }, [finish, quantity.price]);

  const emailHref = `mailto:grahampress@btconnect.com?subject=${encodeURIComponent(
    `Print enquiry: ${selected.name}`,
  )}&body=${encodeURIComponent(
    `Hello Graham Press,\n\nI'd like a confirmed quote for ${quantity.label} × ${selected.name}.\nArtwork option: ${
      finish === "standard"
        ? "Print-ready artwork"
        : finish === "premium"
          ? "Premium paper/finish"
          : "I need design help"
    }.\n\nThe website guide showed approximately £${estimate}. Please confirm the final price and turnaround.\n\nThank you.`,
  )}`;

  return (
    <main>
      <div className="demo-ribbon">
        <span>Website concept</span>
        <p>Guide prices are examples for Graham Press to confirm</p>
      </div>

      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#top" aria-label="Graham Press home">
            <span className="brand-name">graham press</span>
            <span className="brand-sub">Design &amp; Print</span>
          </a>

          <nav aria-label="Main navigation">
            <a href="#services">Services</a>
            <a href="#prices">Price guide</a>
            <a href="#process">How it works</a>
            <a href="#visit">Visit us</a>
          </nav>

          <a className="header-call" href="tel:01243822797">
            <span>Call us</span>
            01243 822797
          </a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Your local Bognor Regis print shop</p>
            <h1>
              Your idea.
              <br />
              <em>Beautifully printed.</em>
            </h1>
            <p className="hero-lead">
              From one important copy to a complete business print run, get
              friendly advice, quality results and a clear price before we begin.
            </p>
            <div className="hero-actions">
              <a className="button button-lime" href="#quote">
                Get a guide price <ArrowIcon />
              </a>
              <a className="button button-ghost" href="tel:01243822797">
                Call 01243 822797
              </a>
            </div>
            <div className="hero-trust" aria-label="Service highlights">
              <span><b>✓</b> Any size job</span>
              <span><b>✓</b> Design help available</span>
              <span><b>✓</b> Local collection</span>
            </div>
          </div>

          <div className="print-stage" aria-label="A selection of print products">
            <div className="registration-marks mark-one">+</div>
            <div className="registration-marks mark-two">+</div>
            <div className="paper paper-back">
              <span className="paper-kicker">GRAHAM PRESS</span>
              <span className="paper-lines" />
              <span className="paper-lines short" />
              <div className="swatches"><i /><i /><i /><i /></div>
            </div>
            <div className="paper paper-main">
              <span className="paper-label">PRINTED LOCALLY</span>
              <strong>MAKE IT<br />TANGIBLE.</strong>
              <p>Design • Print • Finish</p>
              <div className="crop-marks"><i /><i /><i /><i /></div>
            </div>
            <div className="business-card">
              <span>graham press</span>
              <small>YOUR IDEAS, IN PRINT.</small>
            </div>
            <div className="colour-wheel" aria-hidden="true"><i /></div>
            <div className="print-note">
              <b>Short &amp; long runs</b>
              <span>Made around what you need</span>
            </div>
          </div>
        </div>
        <div className="ticker" aria-hidden="true">
          <div>
            <span>COLOUR PRINTING</span><i>✦</i><span>PHOTOCOPYING</span><i>✦</i>
            <span>LARGE FORMAT</span><i>✦</i><span>DESIGN</span><i>✦</i>
            <span>STATIONERY</span><i>✦</i><span>BINDING</span><i>✦</i>
          </div>
        </div>
      </section>

      <section className="services section" id="services">
        <div className="section-inner">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow dark"><span /> What we print</p>
              <h2>Everything you need.<br /><em>All under one roof.</em></h2>
            </div>
            <p>
              Whether it is for work, a celebration or something personal,
              Graham Press can help you choose the right paper, finish and quantity.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <article className="service-card" key={service.title}>
                <div className="service-topline">
                  <span className={`service-marker marker-${index % 4}`}>{service.marker}</span>
                  <span className="service-price">{service.price}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <a href="#quote" aria-label={`Get a guide price for ${service.title}`}>
                  Get a guide price <ArrowIcon />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="quote-section section" id="prices">
        <div className="section-inner quote-layout">
          <div className="quote-intro">
            <p className="eyebrow light"><span /> Straightforward pricing</p>
            <h2>Know the rough cost <em>before you ask.</em></h2>
            <p>
              Choose a popular product for an instant guide. Graham Press can then
              confirm the exact paper, artwork and turnaround with you.
            </p>

            <div className="quick-price-list">
              <div className="list-head"><span>Popular job</span><span>Guide price</span></div>
              {quickPrices.map(([item, price]) => (
                <div className="list-row" key={item}><span>{item}</span><strong>{price}</strong></div>
              ))}
            </div>
            <p className="price-disclaimer">
              Concept pricing only. Final prices, VAT and turnaround to be confirmed by Graham Press.
            </p>
          </div>

          <div className="quote-card" id="quote">
            <div className="quote-card-head">
              <div>
                <span>QUICK QUOTE</span>
                <h3>What can we print for you?</h3>
              </div>
              <span className="quote-step">01</span>
            </div>

            <label>
              <span>Product</span>
              <select
                value={product}
                onChange={(event) => {
                  setProduct(event.target.value as ProductKey);
                  setQuantityIndex(2);
                }}
              >
                {Object.entries(products).map(([key, item]) => (
                  <option value={key} key={key}>{item.name}</option>
                ))}
              </select>
            </label>

            <label>
              <span>Quantity</span>
              <select
                value={safeIndex}
                onChange={(event) => setQuantityIndex(Number(event.target.value))}
              >
                {selected.quantities.map((item, index) => (
                  <option value={index} key={item.label}>{item.label}</option>
                ))}
              </select>
            </label>

            <fieldset>
              <legend>Artwork &amp; finish</legend>
              <div className="finish-options">
                {[
                  ["standard", "Print-ready", "Standard stock"],
                  ["premium", "Premium", "Heavier stock"],
                  ["design", "Design help", "Make it for me"],
                ].map(([value, title, description]) => (
                  <label className={finish === value ? "selected" : ""} key={value}>
                    <input
                      type="radio"
                      name="finish"
                      value={value}
                      checked={finish === value}
                      onChange={(event) => setFinish(event.target.value)}
                    />
                    <b>{title}</b>
                    <span>{description}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="estimate-box" aria-live="polite">
              <div>
                <span>Estimated guide</span>
                <strong>£{estimate}</strong>
              </div>
              <p>Final quote confirmed before printing</p>
            </div>

            <a className="button button-dark full-button" href={emailHref}>
              Ask us to confirm this quote <ArrowIcon />
            </a>
            <p className="small-centred">Prefer to talk? <a href="tel:01243822797">Call 01243 822797</a></p>
          </div>
        </div>
      </section>

      <section className="process section" id="process">
        <div className="section-inner">
          <div className="section-heading centre-heading">
            <p className="eyebrow dark"><span /> Simple from start to finish</p>
            <h2>From your screen <em>to your hands.</em></h2>
            <p>No confusing order system. Tell us what you need and we will help with the rest.</p>
          </div>

          <div className="steps">
            <article>
              <span className="step-number">01</span>
              <div className="step-illustration send-art"><i>PDF</i><i>JPG</i><i>DOC</i></div>
              <h3>Send your idea</h3>
              <p>Bring it into the shop or email your artwork, document or rough idea.</p>
            </article>
            <article>
              <span className="step-number">02</span>
              <div className="step-illustration proof-art"><i>✓</i><b>APPROVED</b></div>
              <h3>Confirm the proof</h3>
              <p>We agree the paper, quantity, finish, price and design before printing.</p>
            </article>
            <article>
              <span className="step-number">03</span>
              <div className="step-illustration collect-art"><i /><i /><i /></div>
              <h3>Collect your print</h3>
              <p>Your finished order is prepared with care and ready to collect locally.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="local-section">
        <div className="section-inner local-grid">
          <div className="local-art" aria-hidden="true">
            <div className="local-card local-card-one"><span>EST.</span><strong>LOCAL</strong><small>BOGNOR REGIS</small></div>
            <div className="local-card local-card-two"><span>QUALITY</span><strong>IN EVERY</strong><small>DETAIL</small></div>
            <div className="local-roundel">GP<i>✦</i></div>
          </div>
          <div className="local-copy">
            <p className="eyebrow light"><span /> Proper local service</p>
            <h2>Real print advice from <em>real people.</em></h2>
            <p>
              Graham Press is a long-established independent design and print shop in
              Bognor Regis. Pop in, explain the job and get experienced help without
              the guesswork of an online-only printer.
            </p>
            <div className="local-points">
              <span><b>01</b> Friendly, practical advice</span>
              <span><b>02</b> Small jobs welcome</span>
              <span><b>03</b> Design through to finishing</span>
            </div>
          </div>
        </div>
      </section>

      <section className="visit section" id="visit">
        <div className="section-inner visit-grid">
          <div className="visit-copy">
            <p className="eyebrow dark"><span /> Visit the shop</p>
            <h2>Let’s get it <em>in print.</em></h2>
            <p>Call, email or drop in with your file or idea. We will help you work out the best way to print it.</p>

            <div className="contact-cards">
              <a href="tel:01243822797">
                <span>PHONE</span><strong>01243 822797</strong><ArrowIcon />
              </a>
              <a href="mailto:grahampress@btconnect.com">
                <span>EMAIL</span><strong>grahampress@btconnect.com</strong><ArrowIcon />
              </a>
            </div>
          </div>

          <div className="visit-card">
            <div className="map-visual">
              <span className="road road-one" />
              <span className="road road-two" />
              <span className="road road-three" />
              <span className="map-pin"><i>GP</i></span>
              <span className="map-label">LONDON ROAD</span>
            </div>
            <div className="visit-details">
              <div>
                <span>FIND US</span>
                <strong>80 London Road<br />Bognor Regis, PO21 1DD</strong>
                <a href="https://www.google.com/maps/search/?api=1&query=Graham+Press+80+London+Road+Bognor+Regis+PO21+1DD" target="_blank" rel="noreferrer">
                  Get directions <ArrowIcon />
                </a>
              </div>
              <div>
                <span>OPENING HOURS</span>
                <strong>Monday–Friday<br />09:30–13:00<br />14:00–15:00</strong>
                <small>Closed Saturday &amp; Sunday</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="section-inner">
          <p>One copy or one thousand.</p>
          <h2>Whatever you need,<br /><em>let’s print it properly.</em></h2>
          <div>
            <a className="button button-lime" href="#quote">Get a guide price <ArrowIcon /></a>
            <a className="button button-ghost" href="tel:01243822797">Call the shop</a>
          </div>
        </div>
      </section>

      <footer>
        <div className="section-inner footer-main">
          <a className="brand footer-brand" href="#top">
            <span className="brand-name">graham press</span>
            <span className="brand-sub">Design &amp; Print</span>
          </a>
          <p>Single to full colour printing • Large format • Copying • Stationery • Binding • Design</p>
          <div className="footer-links">
            <a href="#services">Services</a>
            <a href="#prices">Prices</a>
            <a href="#visit">Contact</a>
          </div>
        </div>
        <div className="section-inner footer-bottom">
          <span>© 2026 Graham Press. Website concept.</span>
          <span>80 London Road, Bognor Regis, PO21 1DD</span>
        </div>
      </footer>

      <div className="mobile-actions" aria-label="Quick contact">
        <a href="tel:01243822797">Call now</a>
        <a href="#quote">Guide price <ArrowIcon /></a>
      </div>
    </main>
  );
}
