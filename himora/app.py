from flask import Flask, render_template

app = Flask(__name__)

# ---- Edit this data to change what shows up on the site ----

# Add or delete a dict here to add/remove a destination card — no HTML editing needed.
PACKAGES = [
    {
        "name": "Manali",
        "tag": "Snow peaks & pine trails",
        "days": "4D / 3N",
        "price": "₹9,999",
        "img": "manali.jpg",
        "blurb": "Solang Valley, Old Manali cafes, and a day trip to Rohtang or Atal Tunnel.",
    },
    {
        "name": "Kullu",
        "tag": "River valleys & orchards",
        "days": "3D / 2N",
        "price": "₹7,499",
        "img": "kullu.jpg",
        "blurb": "Rafting on the Beas, apple orchards, and the Great Himalayan National Park edge.",
    },
    {
        "name": "Kasol",
        "tag": "Parvati valley calm",
        "days": "3D / 2N",
        "price": "₹6,999",
        "img": "kasol.jpg",
        "blurb": "Riverside cafes, Tosh and Kheerganga treks, and slow mountain mornings.",
    },
    {
        "name": "Shimla",
        "tag": "The colonial capital",
        "days": "2D / 1N",
        "price": "₹4,999",
        "img": "shimla.jpg",
        "blurb": "Mall Road, Jakhoo temple, and pine-covered ridges right where we're based.",
    },
    {
        "name": "Dharamshala",
        "tag": "Monasteries & mist",
        "days": "3D / 2N",
        "price": "₹7,999",
        "img": "dharamshala.jpg",
        "blurb": "McLeodganj cafes, the Dalai Lama temple, and Triund's ridgeline views.",
    },
    {
        "name": "Spiti Valley",
        "tag": "Cold desert, open sky",
        "days": "6D / 5N",
        "price": "₹16,999",
        "img": "spiti.jpg",
        "blurb": "Key Monastery, Chandratal, and the highest motorable villages in the valley.",
    },
    {
        "name": "Dalhousie",
        "tag": "Colonial hill roads",
        "days": "3D / 2N",
        "price": "₹7,499",
        "img": "dalhousie.jpg",
        "blurb": "Khajjiar meadows, pine-lined roads, and quiet church-town evenings.",
    },
    {
        "name": "Bir Billing",
        "tag": "Paragliding capital",
        "days": "2D / 1N",
        "price": "₹5,999",
        "img": "bir.jpg",
        "blurb": "Tandem paragliding, Tibetan colony cafes, and views over the Kangra valley.",
    },
    {
        "name": "Tirthan Valley",
        "tag": "Off the main trail",
        "days": "3D / 2N",
        "price": "₹7,999",
        "img": "tirthan.jpg",
        "blurb": "Trout fishing, riverside stays, and treks into the Great Himalayan National Park.",
    },
    {
        "name": "Kinnaur",
        "tag": "Apple orchards & old trade routes",
        "days": "5D / 4N",
        "price": "₹13,999",
        "img": "kinnaur.jpg",
        "blurb": "Kalpa's Kinner Kailash views, Sangla valley, and villages along the old Hindustan-Tibet road.",
    },
]

# The 4 destinations that appear as stops along the scroll journey on the homepage.
# Pulls from PACKAGES above so there's only one place to edit prices/blurbs.
JOURNEY_STOP_NAMES = ["Manali", "Kasol", "Kullu", "Kinnaur"]
JOURNEY_STOPS = [p for name in JOURNEY_STOP_NAMES for p in PACKAGES if p["name"] == name]

STATS = [
    {"value": 6, "suffix": "+", "label": "years running trips"},
    {"value": 850, "suffix": "+", "label": "travellers taken up"},
    {"value": 20, "suffix": "+", "label": "villages & valleys covered"},
    {"value": 4.9, "suffix": "/5", "label": "average trip rating"},
]

TESTIMONIALS = [
    {
        "name": "Riya M.",
        "trip": "Kasol, 3D/2N",
        "quote": "Felt like travelling with a friend who already knew every good cafe in Kasol, not a tour group.",
    },
    {
        "name": "Aditya & Meher",
        "trip": "Spiti Valley, 6D/5N",
        "quote": "The Spiti route they picked skipped every tourist trap. Chandratal at sunrise was worth the whole trip alone.",
    },
    {
        "name": "Karan S.",
        "trip": "Manali, 4D/3N",
        "quote": "Quick replies on WhatsApp the entire time, even changed our homestay last minute without any fuss.",
    },
    {
        "name": "Priya T.",
        "trip": "Bir Billing, 2D/1N",
        "quote": "Booked my first paragliding flight through them — sorted pickup, gear, and timing without me lifting a finger.",
    },
]

CONTACT = {
    "whatsapp_number": "911234567890",  # TODO: replace with real WhatsApp number (with country code, no +/spaces)
    "instagram_handle": "himora.travels",  # TODO: replace with real Instagram handle
    "city": "Shimla, Himachal Pradesh",
}


@app.route("/")
def home():
    return render_template(
        "index.html",
        packages=PACKAGES,
        journey_stops=JOURNEY_STOPS,
        stats=STATS,
        testimonials=TESTIMONIALS,
        contact=CONTACT,
    )


if __name__ == "__main__":
    app.run(debug=True, port=5000)
