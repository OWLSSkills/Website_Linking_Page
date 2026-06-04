import styles from "./PackingList.module.css";

export default function PackingList() {
  return (
    <section className={styles.packingSection}>
      <div className={styles.header}>
        <h1 className="gloria">Jessie Krebs General Packing Lists</h1>
        <h2>To help you prepare for what you’ll need</h2>

        <div className={styles.intro}>
          <p>
            We are usually close to our vehicles at the beginning of our trip, so feel free to bring whatever
            you think you might want to be comfortable. If you’re not sure, bring
            it with you!
          </p>

          <p>
            If you are lacking an item of gear, please let us know and we may
            have something you can borrow or be able to suggest an alternative
            option. Our goal is to have you learn skills and information which
            will help you know what equipment will work best for you, not spend
            a lot of money on gear you may not actually need!
          </p>

          <p>
            Please don&apos;t bring pets or young children unless specifically
            cleared through OWLS Skills. 
          </p>
          <p>Thank you!</p>
        </div>
      </div>

      <div className={styles.paperCard}>
        <div className={styles.paperInner}>
          <h3 className="alfarn">For a typical one-day program:</h3>

          <p className={styles.listIntro}>Bring or wear:</p>

          <ul>
            <li>Closed toed shoes, like hiking boots (though we generally don’t walk far)</li>
            <li>Long pants (something sturdier and baggier than leggings preferred, cargo pants are great)</li>
            <li>Long sleeve shirt</li>
            <li>Sun hat</li>
            <li>A warm layer (at least for the upper body)</li>
            <li>Rain gear (for wind as well as precipitation)</li>
            <li>Large full water bottle and extra water for the day</li>
            <li>Lunch and snacks</li>
            <li>At least two days&apos; worth of any essential medications (good to do on any day trip)</li>
          </ul>

          <h3>Optional items for one day or longer programs:</h3>

          <ul>
            <li>Bug spray and/or mosquito netting/scarf, etc.</li>
            <li>Sunscreen</li>
            <li>Sunglasses and/or safety glasses</li>
            <li>Camp chair, crazy creek, or sit pad (sit pads are provided as well)</li>
            <li>Note taking materials (provided as well)</li>
            <li>“Pee” cloth (I use a yellow handkerchief, an 18&quot; square of absorbent rag/cloth works well too!)</li>
            <li>Mask or handkerchief to cover your mouth and nose to limit Covid-19 exposure</li>
            <li>Personal hand sanitizer (we will have a hand wash station available)</li>
            <li>Knife, we have plenty you may borrow as well, so please donʼt buy one for the class</li>
            <li>Knife/knives to practice sharpening with (If you don't have a "survival" knife, kitchen knives will do! Please wrap them in a towel or something if you donʼt have sheaths)</li>
            <li>Any survival gear you have questions about or want to play with (water filters/disinfectants, compasses, maps, signaling material, fire starters, shelter material, etc.)</li>
            <li>Leather Gloves</li>
          </ul>
        </div>
      </div>

      <div className={styles.paperCardLight}>
        <div className={styles.paperInner}>
          <h3>For OVERNIGHT programs your packing list will also include:</h3>

          <p className={styles.listIntro}>Bring or wear:</p>

          <ul>
            <li>A good pair of hiking boots (just one pair is fine, just make sure they are durable and comfortable)</li>
            <li>At least 2 liters of water storage capacity (water bottles or bladders)</li>
            <li>A bowl and/or cup and spoon or fork</li>
            <li>All necessary personal medications and health aids (back support, knee brace, inhalers, EpiPen, etc.) for at least 5 days (in case of some emergency)</li>
            <li>Two extra pairs of socks (one pair thick, fluffy, and less snug for sleeping only)</li>
            <li>One extra set of underclothes</li>
            <li>A durable food bag containing your breakfasts, snacks, and lunches suitable for camping (please ask if you have questions) dinners are provided unless otherwise noted</li>
            <li>Headlamp or flashlight with spare batteries or a way to recharge</li>
            <li>Sleeping bag/system (rated appropriately for expected temps)</li>
            <li>Sleeping bag liner (I usually use a full size or larger fitted bed sheet, flannel is awesome!)</li>
            <li>Insulation pad (non-inflatables are best for reasons that will be explained in class.If you donʼt have one, let me know and I likely have one you can borrow.)</li>
            <li>Weather Cover (tarp, large flat bedsheet, or tent) If you bring a tarp or bedsheet
              (usually in the 8X10 range for size) please bring about 50 feet of military grade paracord or
              other strong line to tie it up with (if you like to be prepped, cut and burn the line ends to the
              following approximate lengths: 1 line 20-25 feet long, 1 line 10-12 feet long, and 4 lines 5-6 feet long.
              So 6 lines total for a shelter line kit). Please check with me if you are not sure what to bring.
              Donʼt worry, youʼll learn how to make it into a good shelter, and yes, you can sleep dry under a
              cotton bedsheet in a rainstorm with a little know-how!</li>
            <li>Toiletries as desired (toothpaste and brush, comb, hair ties, feminine products,
              lip balm, lotion, TP, nail clippers, etc...)</li>
            <li>If itʼs a backpacking trip you will also want at least 3 liters water-carrying capacity total , and a
              backpack (40-65 liter capacity), or if you prefer you may use the same 8X10 tarp or bedsheet that
              you may use for your shelter, and additionally bring a sturdy belt and shoulder straps or about 10-15
              feet of seatbelt webbing to make an improvised backpack out of (Iʼll show you how).</li>
          </ul>

          <h3>Additional OPTIONAL Items you may bring for overnight stays:</h3>

          <ul>
            <li>Extra drinking water if you prefer not to use/treat wild water when possible
              (1 gallon per person per day as a general rule)</li>
            <li>Watch</li>
            <li>Stove and fuel bottle/s</li>
            <li>Camp shoes</li>
            <li>Trekking poles</li>
            <li>Extra metal cup/bowl for heating water for tea or coffee</li>
            <li>Coffee/tea/water flavorings</li>
            <li>Bivy sack and/or ground tarp</li>
            <li>Water disinfection systems or filters youʼd like to use/try</li>
            <li>Extra cordage/rope to use for various tasks</li>
          </ul>
        </div>
      </div>
    </section>
  );
}