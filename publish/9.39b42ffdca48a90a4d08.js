(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"0IZS":function(n,l,t){"use strict";t.r(l);var e=t("CcnG"),u=t("4E1/"),i=function(){return new u.a},o=function(){return function(){}}(),s=t("pMnS"),a=t("wWmN"),r=t("6kxJ"),c=t("gIcY"),h=t("Ip0R"),p=t("mrSG"),d=function(){function n(){this.genes=[],this.fitness=0}return Object.defineProperty(n.prototype,"length",{get:function(){return this.genes.length},enumerable:!0,configurable:!0}),n.prototype.add=function(n){this.genes.push(n)},n.prototype.clone=function(){for(var l=new n,t=0;t<this.genes.length;t++)l.genes.push(this.genes[t].clone());return l.fitness=this.fitness,l},n.prototype.swap=function(n,l){var t=this.genes[n];this.genes[n]=this.genes[l],this.genes[l]=t},n}(),b=function(n){function l(){var l=null!==n&&n.apply(this,arguments)||this;return l.desiredPriority=-1,l}return p.c(l,n),l}(t("5mq6").a),f=function(){function n(n){this.value=n}return n.prototype.clone=function(){var l=new n;return l.value=this.value,l},n}(),g=function(){function n(){this.chromosomes=[]}return Object.defineProperty(n.prototype,"length",{get:function(){return this.chromosomes.length},enumerable:!0,configurable:!0}),n.prototype.push=function(n){this.chromosomes.push(n)},n.prototype.takeTop=function(n){this.chromosomes=this.chromosomes.slice(0,n)},n.prototype.sort=function(){this.chromosomes.sort(function(n,l){return l.fitness-n.fitness})},Object.defineProperty(n.prototype,"top",{get:function(){return this.chromosomes[0]},enumerable:!0,configurable:!0}),n}(),m=function(){function n(n){this.rnd=n}return n.prototype.cloneArray=function(n){return n.slice()},n.prototype.shuffleArray=function(n){var l=this;return this.cloneArray(n).sort(function(n,t){return l.rnd.next()-.5})},n}(),v=function(n){function l(l){void 0===l&&(l="");var t=n.call(this,"IndexOutOfBoundsError: "+l)||this;return t.name="IndexOutOfBoundsError",t}return p.c(l,n),l}(Error),x=(Error,function(){function n(){this.distanceTable=[]}return n.prototype.registerCities=function(n){var l=n.length;this.numberOfCities=l,this.distanceTable=[];for(var t=[],e=0;e<l;e++){this.distanceTable.push([]);for(var u=0;u<l;u++){var i=this.cityDistance(n[e],n[u]);this.distanceTable[e].push(i),t.push(i)}}t.sort(function(n,l){return l-n}),this._maxDistance=t.slice(0,l+1).reduce(function(n,l){return n+l},0)+1e3},Object.defineProperty(n.prototype,"MaxDistance",{get:function(){return this._maxDistance},enumerable:!0,configurable:!0}),n.prototype.distanceByIndex=function(n,l){if(n<0||n>=this.numberOfCities)throw new v("Index "+n+" is out of bounds. Number of Cities = "+this.numberOfCities);if(l<0||l>=this.numberOfCities)throw new v("Index "+l+" is out of bounds. Number of Cities = "+this.numberOfCities);return this.distanceTable[n][l]},n.prototype.cityDistance=function(n,l){return this.distance(n.x,n.y,l.x,l.y)},n.prototype.distance=function(n,l,t,e){return Math.sqrt((n-t)*(n-t)+(l-e)*(l-e))},n}()),y=function(){function n(n){this.distance=n}return n.prototype.calculateFitness=function(n,l){for(var t=0,e=0,u=n.length,i=u-1;e<u;e++,i=(i+1)%u)t+=this.distance.distanceByIndex(n.genes[e].value,n.genes[i].value);return l.forEach(function(l,e){if(!(l.desiredPriority<=0)){var u=n.genes.findIndex(function(n){return n.value===e});t+=100*(u-l.desiredPriority)}}),1-t/this.distance.MaxDistance},n}(),C=function(){function n(n,l){this.rnd=n,this.distance=l,this.mutationRate=.05,this.count=0}return n.prototype.setMutationRate=function(n){if(n<0||n>1)throw new TypeError("Mutation Rate must be a number between 0 and 1");this.mutationRate=n},n.prototype.mutate=function(n){this.rnd.next()>this.mutationRate||(this.count++,this.forceMutate(n))},n.prototype.forceMutate=function(n){var l=this.rnd.next(3);0===l?this.randomPositionMutate(n):1===l?this.threePiecesMutate(n):this.neighbourMutate(n)},n.prototype.randomPositionMutate=function(n){for(var l=n.length,t=0;t<l/2;t++){var e=this.rnd.next(l-1),u=this.rnd.next(l-1);n.swap(e,u)}},n.prototype.threePiecesMutate=function(n){var l=n.genes,t=n.length,e=this.rnd.next(t-5),u=this.rnd.next(e,t-1),i=l.slice(0,e),o=l.slice(e,u),s=l.slice(u,t);n.genes=o.concat(i).concat(s)},n.prototype.neighbourMutate=function(n){for(var l=n.genes,t=n.length,e=0;e<t;e++){var u=(e+1)%t,i=(e+2)%t,o=(e+3)%t,s=0;s+=this.distance.distanceByIndex(l[e].value,l[u].value),s+=this.distance.distanceByIndex(l[i].value,l[o].value),n.swap(u,i);var a=0;a+=this.distance.distanceByIndex(l[e].value,l[u].value),(a+=this.distance.distanceByIndex(l[i].value,l[o].value))>s&&n.swap(u,i)}},n}(),w=function(){function n(){this.All=[]}return n.prototype.next=function(n){var l=this.All[n];return l.Next?l.Next.value:this.Head.value},n.prototype.prev=function(n){var l=this.All[n];return l.Prev?l.Prev.value:this.Tail.value},n.prototype.remove=function(n){var l=this.All[n];l.Prev&&(l.Prev.Next=l.Next),l.Next&&(l.Next.Prev=l.Prev),l==this.Head&&(this.Head=l.Next),l==this.Tail&&(this.Tail=l.Prev)},n.prototype.addAfter=function(n,l){if(void 0===l&&(l=-1),-1==l)this.Head=new P(n),this.Tail=this.Head,this.All[n]=this.Head;else{var t=this.All[l],e=new P(n);e.Prev=t,t.Next=e,this.Tail=e,this.All[n]=e}return this},n}(),P=function(){return function(n){this.value=n}}(),I=function(){function n(n,l,t){this.mutation=n,this.distance=l,this.rnd=t}return n.prototype.getChild=function(n,l){return this.getChildByLookingAround(n,l)},n.prototype.getChildByLookingAround=function(n,l){for(var t,e=n.length,u=new w,i=new w,o=-1,s=-1,a=0;a<e;a++)u.addAfter(t=n.genes[a].value,o),o=t,i.addAfter(t=l.genes[a].value,s),s=t;var r=new d,c=this.rnd.next(e);r.add(new f(c));for(var h=e;h>1;){var p=u.prev(c),b=i.prev(c),g=u.next(c),m=i.next(c);u.remove(c),i.remove(c),h--;var v=this.distance.distanceByIndex(c,p),x=this.distance.distanceByIndex(c,b),y=this.distance.distanceByIndex(c,g),C=this.distance.distanceByIndex(c,m);v>x&&(v=x,p=b),y>C&&(y=C,g=m),r.add(new f(c=v<y?p:g))}return r},n.prototype.getChildByLookingForward=function(n,l){for(var t,e=n.length,u=new w,i=new w,o=-1,s=-1,a=0;a<e;a++)u.addAfter(t=n.genes[a].value,o),o=t,i.addAfter(t=l.genes[a].value,s),s=t;var r=new d,c=this.rnd.next(e);r.add(new f(c));for(var h=e;h>1;){var p=u.next(c),b=i.next(c);u.remove(c),i.remove(c),h--;var g=this.distance.distanceByIndex(c,p),m=this.distance.distanceByIndex(c,b);r.add(new f(c=g<m?p:b))}return r},n.prototype.getChildByLookingBackward=function(n,l){for(var t,e=n.length,u=new w,i=new w,o=-1,s=-1,a=0;a<e;a++)u.addAfter(t=n.genes[a].value,o),o=t,i.addAfter(t=l.genes[a].value,s),s=t;var r=new d,c=this.rnd.next(e);r.add(new f(c));for(var h=e;h>1;){var p=u.prev(c),b=i.prev(c);u.remove(c),i.remove(c),h--;var g=this.distance.distanceByIndex(c,p),m=this.distance.distanceByIndex(c,b);r.add(new f(c=g<m?p:b))}return r},n}(),M=function(){function n(n){this.rnd=n}return n.prototype.normalizeFitness=function(n){this.normalizedFitness=[];for(var l=n.chromosomes.reduce(function(n,l){return n+l.fitness},0),t=n.chromosomes.length,e=0;e<t;e++)this.normalizedFitness.push(n.chromosomes[e].fitness/l);for(e=1;e<t;e++)this.normalizedFitness[e]+=this.normalizedFitness[e-1]},n.prototype.tournament=function(n){for(var l=[],t=n.length,e=0;e<t/10;e++){var u=this.rnd.next(t);l.push(n.chromosomes[u])}return l.sort(function(n,l){return l.fitness-n.fitness}),l[0]},n.prototype.roulette=function(n){for(var l,t=this.rnd.next(),e=0,u=n.length-1;u-e>0;)l=Math.floor((e+u)/2),this.normalizedFitness[l]>t?u=l:e=l+1;return n.chromosomes[u]},n}(),A=t("qV2m"),B={populationSize:200,numberOfCities:300,mutationRate:.05,stopAfter:300},R=function(n){function l(l,t,e,u,i,o,s,a){var r=n.call(this,!0)||this;return r.title=l,r.rnd=t,r.util=e,r.fitness=u,r.mutation=i,r.distance=o,r.selection=s,r.crossOver=a,r.width=875,r.height=875,r.stopAfter=B.stopAfter,r.numberOfCities=B.numberOfCities,r.populationSize=B.populationSize,r.mutationRate=B.mutationRate,r.bestGeneration=-1,r.bestFitness=0,r.animationSpeed=0,r.title.setTitle("TSP with Genetic Algorithm"),r}return p.c(l,n),l.prototype.initialize=function(){this.bestGene=void 0,this.bestLocalGene=void 0,this.bestFitness=0,this.bestLocalFitness=0,this.lastFitnessCount=0,this.mutation.count=0,this.bestGeneration=-1,this.mutation.setMutationRate(this.mutationRate),this.cities=[];for(var n=[],l=0;l<this.numberOfCities;l++)this.cities[l]=new b(this.rnd.next(10,this.width-10),this.rnd.next(10,this.height-10)),n[l]=l;for(this.distance.registerCities(this.cities),this.population=new g,l=0;l<this.populationSize;l++){var t=new d;t.genes=this.util.shuffleArray(n.map(function(n){return new f(n)})),this.population.push(t)}this.calculateFitness()},l.prototype.run=function(){var n=new g;if(this.bestGene){n.push(this.bestGene.clone());var l=this.bestGene.clone();this.mutation.forceMutate(l),n.push(l.clone()),this.mutation.forceMutate(l),n.push(l.clone()),n.push(l)}for(;n.length<this.populationSize;){var t=this.selection.tournament(this.population),e=this.selection.tournament(this.population),u=this.crossOver.getChild(t,e);this.mutation.mutate(u),n.push(u)}this.population=n,this.calculateFitness()},l.prototype.calculateFitness=function(){var n=this;this.population.chromosomes.forEach(function(l){l.fitness=n.fitness.calculateFitness(l,n.cities)}),this.population.sort(),this.population.takeTop(this.populationSize),this.bestLocalGene=this.population.top,this.bestLocalFitness=this.bestLocalGene.fitness,this.selection.normalizeFitness(this.population),this.checkGenerationResults()},l.prototype.checkGenerationResults=function(){this.bestFitness<this.bestLocalFitness?(this.bestFitness=this.bestLocalFitness,this.bestGene=this.bestLocalGene,this.bestGeneration=this.cycle,this.lastFitnessCount=1,this.draw()):(this.lastFitnessCount++,this.lastFitnessCount>this.stopAfter&&this.stop())},l.prototype.draw=function(){var n=this,l=this.bestGene.genes.map(function(n){return n.value});this.canvas.clear(),this.canvas.font="14px serif",this.canvas.strokeStyle="green",this.cities.forEach(function(t,e){if(n.canvas.circle(t.x,t.y,e==l[0]?10:t.desiredPriority>0?5:2),t.desiredPriority>0){var u=l.findIndex(function(n){return n===e});n.canvas.text(u+" > "+t.desiredPriority,t.x,t.y)}}),this.canvas.strokeStyle="blue";var t=l.map(function(l){return n.cities[l]});this.canvas.polygon(t,{closePolygon:!1})},l}(A.a),S=t("ZYjt"),k=e.nb({encapsulation:2,styles:[],data:{}});function T(n){return e.Cb(0,[(n()(),e.pb(0,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),e.pb(1,0,null,null,1,"h1",[["class","attractive-h1"]],null,null,null,null,null)),(n()(),e.Bb(-1,null,["Running..."]))],null,null)}function D(n){return e.Cb(0,[e.zb(402653184,1,{canvas:0}),(n()(),e.pb(1,0,null,null,68,"div",[["class","row"]],null,null,null,null,null)),(n()(),e.pb(2,0,null,null,2,"div",[["class","col-md-8"]],null,null,null,null,null)),(n()(),e.pb(3,0,null,null,1,"enhanced-canvas",[["id","tsp-canvas"]],null,null,null,a.b,a.a)),e.ob(4,245760,[[1,4]],0,r.a,[],{id:[0,"id"],originalWidth:[1,"originalWidth"],originalHeight:[2,"originalHeight"]},null),(n()(),e.pb(5,0,null,null,64,"div",[["class","col-md-4"]],null,null,null,null,null)),(n()(),e.pb(6,0,null,null,2,"h4",[],null,null,null,null,null)),(n()(),e.pb(7,0,null,null,1,"a",[["href","https://github.com/ayman-eltemsahi/playground/tree/master/src/app/tsp-with-genetic-algo"],["target","_blank"]],null,null,null,null,null)),(n()(),e.Bb(-1,null,["Source Code"])),(n()(),e.pb(9,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),e.pb(10,0,null,null,0,"input",[["class","btn btn-success"],["type","submit"],["value","Run"]],[[8,"disabled",0]],[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.start()&&e),e},null,null)),(n()(),e.pb(11,0,null,null,0,"input",[["class","btn btn-danger m-l-5"],["type","submit"],["value","Stop"]],[[8,"disabled",0]],[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.forceStop()&&e),e},null,null)),(n()(),e.pb(12,0,null,null,5,"div",[["class","form-group row"]],null,null,null,null,null)),(n()(),e.pb(13,0,null,null,1,"label",[["class","col-sm-7 col-form-label"]],null,null,null,null,null)),(n()(),e.Bb(-1,null,["Current Generation"])),(n()(),e.pb(15,0,null,null,2,"div",[["class","col-sm-5"]],null,null,null,null,null)),(n()(),e.pb(16,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),e.Bb(17,null,["",""])),(n()(),e.pb(18,0,null,null,5,"div",[["class","form-group row"]],null,null,null,null,null)),(n()(),e.pb(19,0,null,null,1,"label",[["class","col-sm-7 col-form-label"]],null,null,null,null,null)),(n()(),e.Bb(-1,null,["Best value at Gen"])),(n()(),e.pb(21,0,null,null,2,"div",[["class","col-sm-5"]],null,null,null,null,null)),(n()(),e.pb(22,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),e.Bb(23,null,["",""])),(n()(),e.pb(24,0,null,null,10,"div",[["class","form-group row"]],null,null,null,null,null)),(n()(),e.pb(25,0,null,null,1,"label",[["class","col-sm-7 col-form-label"],["for","numberOfCities"]],null,null,null,null,null)),(n()(),e.Bb(-1,null,["Number of Cities"])),(n()(),e.pb(27,0,null,null,7,"div",[["class","col-sm-5"]],null,null,null,null,null)),(n()(),e.pb(28,0,null,null,6,"input",[["class","form-control w-80"],["id","numberOfCities"],["name","numberOfCities"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(n,l,t){var u=!0,i=n.component;return"input"===l&&(u=!1!==e.xb(n,29)._handleInput(t.target.value)&&u),"blur"===l&&(u=!1!==e.xb(n,29).onTouched()&&u),"compositionstart"===l&&(u=!1!==e.xb(n,29)._compositionStart()&&u),"compositionend"===l&&(u=!1!==e.xb(n,29)._compositionEnd(t.target.value)&&u),"change"===l&&(u=!1!==e.xb(n,30).onChange(t.target.value)&&u),"input"===l&&(u=!1!==e.xb(n,30).onChange(t.target.value)&&u),"blur"===l&&(u=!1!==e.xb(n,30).onTouched()&&u),"ngModelChange"===l&&(u=!1!==(i.numberOfCities=t)&&u),u},null,null)),e.ob(29,16384,null,0,c.b,[e.D,e.k,[2,c.a]],null,null),e.ob(30,16384,null,0,c.i,[e.D,e.k],null,null),e.yb(1024,null,c.d,function(n,l){return[n,l]},[c.b,c.i]),e.ob(32,671744,null,0,c.g,[[8,null],[8,null],[8,null],[6,c.d]],{name:[0,"name"],isDisabled:[1,"isDisabled"],model:[2,"model"]},{update:"ngModelChange"}),e.yb(2048,null,c.e,null,[c.g]),e.ob(34,16384,null,0,c.f,[[4,c.e]],null,null),(n()(),e.pb(35,0,null,null,10,"div",[["class","form-group row"]],null,null,null,null,null)),(n()(),e.pb(36,0,null,null,1,"label",[["class","col-sm-7 col-form-label"],["for","populationSize"]],null,null,null,null,null)),(n()(),e.Bb(-1,null,["Population Size"])),(n()(),e.pb(38,0,null,null,7,"div",[["class","col-sm-5"]],null,null,null,null,null)),(n()(),e.pb(39,0,null,null,6,"input",[["class","form-control w-80"],["id","populationSize"],["name","populationSize"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(n,l,t){var u=!0,i=n.component;return"input"===l&&(u=!1!==e.xb(n,40)._handleInput(t.target.value)&&u),"blur"===l&&(u=!1!==e.xb(n,40).onTouched()&&u),"compositionstart"===l&&(u=!1!==e.xb(n,40)._compositionStart()&&u),"compositionend"===l&&(u=!1!==e.xb(n,40)._compositionEnd(t.target.value)&&u),"change"===l&&(u=!1!==e.xb(n,41).onChange(t.target.value)&&u),"input"===l&&(u=!1!==e.xb(n,41).onChange(t.target.value)&&u),"blur"===l&&(u=!1!==e.xb(n,41).onTouched()&&u),"ngModelChange"===l&&(u=!1!==(i.populationSize=t)&&u),u},null,null)),e.ob(40,16384,null,0,c.b,[e.D,e.k,[2,c.a]],null,null),e.ob(41,16384,null,0,c.i,[e.D,e.k],null,null),e.yb(1024,null,c.d,function(n,l){return[n,l]},[c.b,c.i]),e.ob(43,671744,null,0,c.g,[[8,null],[8,null],[8,null],[6,c.d]],{name:[0,"name"],isDisabled:[1,"isDisabled"],model:[2,"model"]},{update:"ngModelChange"}),e.yb(2048,null,c.e,null,[c.g]),e.ob(45,16384,null,0,c.f,[[4,c.e]],null,null),(n()(),e.pb(46,0,null,null,10,"div",[["class","form-group row"]],null,null,null,null,null)),(n()(),e.pb(47,0,null,null,1,"label",[["class","col-sm-7 col-form-label"],["for","mutationRate"]],null,null,null,null,null)),(n()(),e.Bb(-1,null,["Mutation Rate "])),(n()(),e.pb(49,0,null,null,7,"div",[["class","col-sm-5"]],null,null,null,null,null)),(n()(),e.pb(50,0,null,null,6,"input",[["class","form-control w-80"],["id","mutationRate"],["max","1"],["min","0"],["name","mutationRate"],["step","0.01"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(n,l,t){var u=!0,i=n.component;return"input"===l&&(u=!1!==e.xb(n,51)._handleInput(t.target.value)&&u),"blur"===l&&(u=!1!==e.xb(n,51).onTouched()&&u),"compositionstart"===l&&(u=!1!==e.xb(n,51)._compositionStart()&&u),"compositionend"===l&&(u=!1!==e.xb(n,51)._compositionEnd(t.target.value)&&u),"change"===l&&(u=!1!==e.xb(n,52).onChange(t.target.value)&&u),"input"===l&&(u=!1!==e.xb(n,52).onChange(t.target.value)&&u),"blur"===l&&(u=!1!==e.xb(n,52).onTouched()&&u),"ngModelChange"===l&&(u=!1!==(i.mutationRate=t)&&u),u},null,null)),e.ob(51,16384,null,0,c.b,[e.D,e.k,[2,c.a]],null,null),e.ob(52,16384,null,0,c.i,[e.D,e.k],null,null),e.yb(1024,null,c.d,function(n,l){return[n,l]},[c.b,c.i]),e.ob(54,671744,null,0,c.g,[[8,null],[8,null],[8,null],[6,c.d]],{name:[0,"name"],isDisabled:[1,"isDisabled"],model:[2,"model"]},{update:"ngModelChange"}),e.yb(2048,null,c.e,null,[c.g]),e.ob(56,16384,null,0,c.f,[[4,c.e]],null,null),(n()(),e.pb(57,0,null,null,10,"div",[["class","form-group row"]],null,null,null,null,null)),(n()(),e.pb(58,0,null,null,1,"label",[["class","col-sm-7 col-form-label"],["for","stopAfter"]],null,null,null,null,null)),(n()(),e.Bb(-1,null,["Stop after "])),(n()(),e.pb(60,0,null,null,7,"div",[["class","col-sm-5"]],null,null,null,null,null)),(n()(),e.pb(61,0,null,null,6,"input",[["class","form-control w-80"],["id","stopAfter"],["name","stopAfter"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(n,l,t){var u=!0,i=n.component;return"input"===l&&(u=!1!==e.xb(n,62)._handleInput(t.target.value)&&u),"blur"===l&&(u=!1!==e.xb(n,62).onTouched()&&u),"compositionstart"===l&&(u=!1!==e.xb(n,62)._compositionStart()&&u),"compositionend"===l&&(u=!1!==e.xb(n,62)._compositionEnd(t.target.value)&&u),"change"===l&&(u=!1!==e.xb(n,63).onChange(t.target.value)&&u),"input"===l&&(u=!1!==e.xb(n,63).onChange(t.target.value)&&u),"blur"===l&&(u=!1!==e.xb(n,63).onTouched()&&u),"ngModelChange"===l&&(u=!1!==(i.stopAfter=t)&&u),u},null,null)),e.ob(62,16384,null,0,c.b,[e.D,e.k,[2,c.a]],null,null),e.ob(63,16384,null,0,c.i,[e.D,e.k],null,null),e.yb(1024,null,c.d,function(n,l){return[n,l]},[c.b,c.i]),e.ob(65,671744,null,0,c.g,[[8,null],[8,null],[8,null],[6,c.d]],{name:[0,"name"],isDisabled:[1,"isDisabled"],model:[2,"model"]},{update:"ngModelChange"}),e.yb(2048,null,c.e,null,[c.g]),e.ob(67,16384,null,0,c.f,[[4,c.e]],null,null),(n()(),e.gb(16777216,null,null,1,null,T)),e.ob(69,16384,null,0,h.h,[e.O,e.L],{ngIf:[0,"ngIf"]},null)],function(n,l){var t=l.component;n(l,4,0,"tsp-canvas",t.width,t.height),n(l,32,0,"numberOfCities",t.isRunning,t.numberOfCities),n(l,43,0,"populationSize",t.isRunning,t.populationSize),n(l,54,0,"mutationRate",t.isRunning,t.mutationRate),n(l,65,0,"stopAfter",t.isRunning,t.stopAfter),n(l,69,0,t.isRunning)},function(n,l){var t=l.component;n(l,10,0,t.isRunning),n(l,11,0,!t.isRunning),n(l,17,0,t.cycle),n(l,23,0,t.bestGeneration),n(l,28,0,e.xb(l,34).ngClassUntouched,e.xb(l,34).ngClassTouched,e.xb(l,34).ngClassPristine,e.xb(l,34).ngClassDirty,e.xb(l,34).ngClassValid,e.xb(l,34).ngClassInvalid,e.xb(l,34).ngClassPending),n(l,39,0,e.xb(l,45).ngClassUntouched,e.xb(l,45).ngClassTouched,e.xb(l,45).ngClassPristine,e.xb(l,45).ngClassDirty,e.xb(l,45).ngClassValid,e.xb(l,45).ngClassInvalid,e.xb(l,45).ngClassPending),n(l,50,0,e.xb(l,56).ngClassUntouched,e.xb(l,56).ngClassTouched,e.xb(l,56).ngClassPristine,e.xb(l,56).ngClassDirty,e.xb(l,56).ngClassValid,e.xb(l,56).ngClassInvalid,e.xb(l,56).ngClassPending),n(l,61,0,e.xb(l,67).ngClassUntouched,e.xb(l,67).ngClassTouched,e.xb(l,67).ngClassPristine,e.xb(l,67).ngClassDirty,e.xb(l,67).ngClassValid,e.xb(l,67).ngClassInvalid,e.xb(l,67).ngClassPending)})}function F(n){return e.Cb(0,[(n()(),e.pb(0,0,null,null,1,"tsp-ga",[],null,null,null,D,k)),e.ob(1,4374528,null,0,R,[S.h,u.a,m,y,C,x,M,I],null,null)],null,null)}var O=e.lb("tsp-ga",R,F,{},{},[]),z=t("ZYCi"),G=t("PCNd");t.d(l,"TSPGAModuleNgFactory",function(){return _});var _=e.mb(o,[],function(n){return e.vb([e.wb(512,e.j,e.bb,[[8,[s.a,O]],[3,e.j],e.x]),e.wb(4608,h.j,h.i,[e.u,[2,h.p]]),e.wb(4608,c.j,c.j,[]),e.wb(4608,w,w,[]),e.wb(5120,u.a,i,[]),e.wb(4608,x,x,[]),e.wb(4608,C,C,[u.a,x]),e.wb(4608,I,I,[C,x,u.a]),e.wb(4608,y,y,[x]),e.wb(4608,M,M,[u.a]),e.wb(4608,m,m,[u.a]),e.wb(1073742336,h.b,h.b,[]),e.wb(1073742336,z.m,z.m,[[2,z.s],[2,z.k]]),e.wb(1073742336,c.h,c.h,[]),e.wb(1073742336,c.c,c.c,[]),e.wb(1073742336,G.a,G.a,[]),e.wb(1073742336,o,o,[]),e.wb(1024,z.i,function(){return[[{path:"",component:R,pathMatch:"full"}]]},[])])})}}]);