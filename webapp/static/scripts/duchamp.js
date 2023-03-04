//https://docs.google.com/spreadsheets/d/1uiyXboTq1iXrwlpmLfkmAMbzz44ma4gB_wGAdDu2Ivo/edit#gid=0

r = 350
r_invisible = 0.91677*r
r_big_black = 0.8333*r
r_big_radian = 0.7167*r
r_big_group = 0.6833*r
r_delta_big_group = 0.0333

r_black_small = 0.3667*r
r_radian_small = 0.3333*r
r_small_group = 0.3*r
r_delta_small_group = 0.07


r4 = 5
r_sm = 1

x_center = 0
y_center = 0

t = 0
t_small=0

points = []

function setup(){
    
    createCanvas(700, 700);
    frameRate(30);
}

function draw() {
    
    translate(width/2, height/2);
    background(255);
    noFill();
    // rotate(-PI*t/2)
    
    //Main big circle
    stroke(0, 0, 0)
    strokeWeight(2);
    ellipse(x_center, y_center, 2*r, 2*r);
    
    //Invisible circle
    // stroke(0, 0, 255)
    // ellipse(x_center, y_center, 2*r_invisible, 2*r_invisible);
    
    //Big Black
    big_black_amend = r_invisible-r_big_black;
    big_black_center_x = big_black_amend*cos(t);
    big_black_center_y = big_black_amend*sin(t);
    fill(0,0,0)
    ellipse(big_black_center_x, big_black_center_y, 2*r_big_black, 2*r_big_black);
  
    //Big radian circle
    big_radian_amend = r_invisible - r_big_radian
    big_radian_center_x = big_radian_amend*cos(t);
    big_radian_center_y = big_radian_amend*sin(t);
    fill(255, 255, 255)
    ellipse(big_radian_center_x, big_radian_center_y, 2*r_big_radian, 2*r_big_radian);
    
    //Now drawing radians
    num_points = 250
    stroke(0,0,0)
    strokeWeight(1)
    for (let angle=0; angle < 2*PI; angle+=2*PI/num_points){
      x_circum = cos(angle)*r_big_radian+big_radian_center_x
      y_circum = sin(angle)*r_big_radian+big_radian_center_y
      point(x_circum, y_circum)
      line(big_radian_center_x, big_radian_center_y, x_circum, y_circum)
    }
    
    //Now drawing a big group inside big radian circle
    noFill()
    for (let i = 0; i<6; i+=1){
      cur_r = r_big_group*(1-r_delta_big_group*i);
      b_group_amend = r_invisible - cur_r;
      b_group_center_x = b_group_amend*cos(t);
      b_group_center_y = b_group_amend*sin(t);
      if (i==5){
      fill(255, 255, 255)
      strokeWeight(2)
      }
      ellipse(b_group_center_x, b_group_center_y, 2*cur_r, 2*cur_r)
    }
    
    //Now the main small&black circle
    black_small_amend = r_invisible - r_black_small;
    black_small_center_x = black_small_amend*cos(t_small);
    black_small_center_y = black_small_amend*sin(t_small);
    fill(0, 0, 0);
    ellipse(black_small_center_x, black_small_center_y, 2*r_black_small, 2*r_black_small);
  
    //Small radian inside main small&black
    small_radian_amend = r_invisible - r_radian_small;
    small_radian_center_x = small_radian_amend*cos(t_small);
    small_radian_center_y = small_radian_amend*sin(t_small);
    fill(255,255,255);
    ellipse(small_radian_center_x, small_radian_center_y, 2*r_radian_small, 2*r_radian_small);
    //Drawing radians inside the small radian circle
    num_points = 250
    stroke(0,0,0)
    strokeWeight(1)
    for (let angle=0; angle < 2*PI; angle+=2*PI/num_points){
      x_circum = cos(angle)*r_radian_small+small_radian_center_x
      y_circum = sin(angle)*r_radian_small+small_radian_center_y
      point(x_circum, y_circum)
      line(small_radian_center_x, small_radian_center_y, x_circum, y_circum)
    }
    
    //Drawing small group
    for (let i = 0; i<6; i+=1){
      cur_r = r_small_group*(1-r_delta_small_group*2.3*i);
      s_group_amend = r_invisible - cur_r-i*5;
      s_group_center_x = s_group_amend*cos(t_small);
      s_group_center_y = s_group_amend*sin(t_small);
      if (i==0){
        fill(255, 255, 255)
        strokeWeight(2)
      }
      else{
        noFill()
      }
      ellipse(s_group_center_x, s_group_center_y, 2*cur_r, 2*cur_r)
    }
    //Text 'Escargot'
    
    word = 'ESCARGOT'
    textSize(16);
    strokeWeight(1);
    fill(0, 0, 0, 0.5)
    text(word, -40, r-10);
  
    t+= 0.03
    t_small+=0.03
    
   
}