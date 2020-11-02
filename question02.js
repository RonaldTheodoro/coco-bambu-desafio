class Notifier {
  constructor() {
    this.subscribers = [];
    this.latestNews = null;
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }

  unsubscribe(subscriber) {
    this.subscribers = this.subscribers.filter((sub) => {
      if (sub !== subscriber) {
        return sub;
      }
    });
  }

  notifySubscribers() {
    this.subscribers.forEach((e) => {
      e.update();
    });
  }

  getNews() {
    return this.latestNews;
  }

  addNews(news) {
    this.latestNews = news;
  }
}

class SimpleSubscriber {
  constructor(publisher) {
    this.publisher = publisher;
    this.publisher.subscribe(this);
  }

  update() {
    console.log(`Simple Subscriber: ${this.publisher.getNews()}`);
  }
}

class BreakingNewsSubscriber {
  constructor(publisher) {
    this.publisher = publisher;
    this.publisher.subscribe(this);
  }

  update() {
    console.log(`Breaking News Subscriber: ${this.publisher.getNews()}`);
    this.publisher.unsubscribe(this);
  }
}

class Publisher {}

Publisher = Object.assign(Notifier, Publisher);

const publisher = new Publisher();

const subscribers = [SimpleSubscriber, BreakingNewsSubscriber];
subscribers.forEach((e) => {
  new e(publisher);
});

publisher.addNews('Breaking news');
publisher.notifySubscribers();

publisher.addNews('Breaking news 2');
publisher.notifySubscribers();

publisher.addNews('Breaking news 3');
publisher.notifySubscribers();
