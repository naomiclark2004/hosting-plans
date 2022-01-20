function Plan(name,price,space,transfer, pages,discountMonths)
{
    this.name = name;
    this.price = price;
    this.space = space;
    this.transfer = transfer;
    this.pages = pages;
    this.discountMonths = discountMonths;
    Plan.prototype.calcAnnual=function(percentIfDisc)
    {
        // calculate the price for a given onject and give discount if there is one
        var bestPrice = this.price;
        document.getElementById("permo").innerHTML = "Price: $" + this.price + " /mo";
        console.log("Price " + bestPrice);
        var currDate = new Date();
        console.log("Current Date " + currDate);
        var thisMo = currDate.getMonth();
        console.log("This Month " + thisMo);
            for (var i = 0; i < this.discountMonths.length; i++)
        {
            console.log(this.discountMonths.length);

            if (this.discountMonths[i] === thisMo) 
            {
            bestPrice = this.price * percentIfDisc;
            console.log("Price after discount : $" + bestPrice);
            var betterPrice = bestPrice.toFixed(2);
            document.getElementById("after").innerHTML = "Price after discount : $" + betterPrice +" /mo";
            break;
            }
        
        }

        console.log("Price after discount " + bestPrice);
        return bestPrice * 12;
    }

    Plan.prototype.customOptions=function(){
        var x = document.getElementById("planOptions").selectedIndex;
        var y = document.getElementById("planOptions").options;
        console.log(x);
        console.log(y);
        var z = y[x].text;
        console.log(z);
          if (z ==="Basic"){    
            priceNow = p1.price;
            console.log(priceNow);
          } else if (z ==="Professional"){
              priceNow = p2.price;
              console.log(priceNow);
          } else if (z ==="Ultimate"){
            priceNow = p3.price;
            console.log(priceNow);
          }

          var months = document.getElementById("customLength").selectedIndex;
          var num = document.getElementById("customLength").options;
          var chosenMonth = num[months].text;
          if (chosenMonth === "3 Months"){    
            monthsNow = 3;
            console.log(monthsNow);
          } else if (chosenMonth === "6 Months"){    
            monthsNow = 6;
            console.log();
          }else if (chosenMonth === "18 Months"){    
              monthsNow = 18;
              console.log(monthsNow);
          } else if (chosenMonth === "24 Months"){    
            monthsNow = 24;
            console.log(monthsNow);
          }

        var annualPrice = priceNow * monthsNow;
        var priceAnnual = annualPrice.toFixed(2);


        console.log("Annual Price " + priceAnnual);
            document.getElementById("price").innerHTML = monthsNow + " Months : $" + priceAnnual;
            document.getElementById("subtotal").innerHTML = "Subtotal Price : $" + priceAnnual;
            document.getElementById("subtotal").style.fontWeight = "bold";
            document.getElementById("subtotal").style.fontSize = "20px";
            document.getElementById("total").innerHTML = "Order Total: $" + priceAnnual;
            document.getElementById("total").style.fontWeight = "bold";
            document.getElementById("total").style.fontSize = "20px";
            document.getElementById("tax").innerHTML = "Tax: $0.00";

    }

    Plan.prototype.displayAnnual=function(){
        var annualPrice = this.calcAnnual(.80);
        var priceAnnual = annualPrice.toFixed(2);
            console.log("Annual Price " + priceAnnual);
            document.getElementById("price").innerHTML = "Annual Price : $" + priceAnnual;
            document.getElementById("subtotal").innerHTML = "Subtotal Price : $" + priceAnnual;
            document.getElementById("subtotal").style.fontWeight = "bold";
            document.getElementById("subtotal").style.fontSize = "20px";
            document.getElementById("total").innerHTML = "Order Total: $" + priceAnnual;
            document.getElementById("total").style.fontWeight = "bold";
            document.getElementById("total").style.fontSize = "20px";
            document.getElementById("tax").innerHTML = "Tax: $0.00";
            document.getElementById("discount").innerHTML = "Discount: 8%";
    }
}


var p1 = new Plan("Basic", 3.99, 100, 1000, 10, [0,7]);
var p2 = new Plan("Profession", 5.99, 500, 5000, 50, [0,7,11]);
var p3 = new Plan("Ultimate", 9.99, 2000, 20000, 500, [0,7]);
var p4 = new Plan("Custom", 0.00, 000, 000, 0, [0,0]);

  function closeCart() {
    document.getElementById("annual").style.width = "0";
    document.getElementById("annual").style.padding = "0";
    document.getElementById("main").style.marginRight= "0";
    document.getElementById("annual").style.opacity = "0";
    document.getElementById("annual").style.transition = "opacity .0s";
}

function openCart() {
    const mediaQuery = window.matchMedia('(max-width: 426px)')
    if (mediaQuery.matches) {
        document.getElementById("annual").style.width = "86%";
        document.getElementById("annual").style.height = "100%";
        document.getElementById("annual").style.padding = "25px 50px";
        document.getElementById("annual").style.opacity = "100%";
        document.getElementById("annual").style.transition = "all .1s";
    
    }else
        document.getElementById("annual").style.width = "250px";
        document.getElementById("annual").style.height = "100%";
        document.getElementById("annual").style.padding = "50px 30px";
        document.getElementById("main").style.marginRight = "260px";
        document.getElementById("annual").style.opacity = "100%";
        document.getElementById("annual").style.transition = "all .1s";
}

