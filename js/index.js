// Generated by CoffeeScript 1.6.3
(function() {
  jQuery(function() {
    this.film_rolls || (this.film_rolls = []);
    this.film_rolls['film_roll_1'] = new FilmRoll({
      container: '#film_roll_1',
      height: 560,
      pager: true
    });
    this.film_rolls['film_roll_2'] = new FilmRoll({
      container: '#film_roll_2',
      height: 190,
      pager: false,
      prev: '#film_roll_2_left',
      next: '#film_roll_2_right'
    });
    return true;
  });

}).call(this);
