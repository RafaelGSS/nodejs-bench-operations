## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|96,683,454|48343422|
|Using dot notation|67,083,957|33543369|
|Using define property (writable)|4,807,313|2403659|
|Using define property initialized (writable)|6,840,935|3420772|
|Using define property (getter)|2,431,391|1215736|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:01:14 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Directly in the object","opsSec":96683454.8581734,"samples":48343422},{"name":"Using dot notation","opsSec":67083957.638291724,"samples":33543369},{"name":"Using define property (writable)","opsSec":4807313.596500745,"samples":2403659},{"name":"Using define property initialized (writable)","opsSec":6840935.252535618,"samples":3420772},{"name":"Using define property (getter)","opsSec":2431391.642506215,"samples":1215736}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.073ms
new Array(length)|100|0.006ms
array.push|1,000|0.03ms
new Array(length)|1,000|0.016ms
array.push|10,000|0.416ms
new Array(length)|10,000|0.218ms
array.push|1,000,000|28.064ms
new Array(length)|1,000,000|6.971ms
array.push|100,000,000|1,874.934ms
new Array(length)|100,000,000|4,007.016ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.004ms
array.push|100|0.022ms
new Array(length)|100|0.012ms
array.push|1,000|0.036ms
new Array(length)|1,000|0.02ms
array.push|10,000|161.383ms
new Array(length)|10,000|0.033ms
array.push|1,000,000|17.016ms
new Array(length)|1,000,000|7.165ms
array.push|100,000,000|2,072.043ms
new Array(length)|100,000,000|4,613.252ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|322|162|
|Array.from|24|13|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:05:13 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"new Array","opsSec":322.2068025051961,"samples":162},{"name":"Array.from","opsSec":24.58571123889625,"samples":13}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,912|2041|
|new Blob (1024)|569|290|
|text (128)|4,141|2072|
|text (1024)|517|259|
|arrayBuffer (128)|4,152|2077|
|arrayBuffer (1024)|521|261|
|slice (0, 64)|235,542|117772|
|slice (0, 512)|39,017|19510|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:16:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Blob (128)","opsSec":3912.7308198701585,"samples":2041},{"name":"new Blob (1024)","opsSec":569.5762108270412,"samples":290},{"name":"text (128)","opsSec":4141.745382916821,"samples":2072},{"name":"text (1024)","opsSec":517.8526605610128,"samples":259},{"name":"arrayBuffer (128)","opsSec":4152.066349484893,"samples":2077},{"name":"arrayBuffer (1024)","opsSec":521.4066965340799,"samples":261},{"name":"slice (0, 64)","opsSec":235542.96737964044,"samples":117772},{"name":"slice (0, 512)","opsSec":39017.93774593493,"samples":19510}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|417,256|208632|
|[True conditional] Using constructor name|330,951|165476|
|[True conditional] Check if property is valid then instanceof |341,005|170505|
|[False conditional] Using instanceof only|87,378,023|43689037|
|[False conditional] Using constructor name|87,069,759|43535246|
|[False conditional] Check if property is valid then instanceof |86,090,628|43047522|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:08:31 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":417256.53611508204,"samples":208632},{"name":"[True conditional] Using constructor name","opsSec":330951.0521561866,"samples":165476},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":341005.6317178577,"samples":170505},{"name":"[False conditional] Using instanceof only","opsSec":87378023.32074647,"samples":43689037},{"name":"[False conditional] Using constructor name","opsSec":87069759.74332057,"samples":43535246},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":86090628.92818604,"samples":43047522}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,806|3404|
|crypto.verify('RSA-SHA256')|6,718|3360|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:10:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6806.46711554091,"samples":3404},{"name":"crypto.verify('RSA-SHA256')","opsSec":6718.392973837444,"samples":3360}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,459,652|729848|
|fromUnixToISOString(new Date())|2,084,091|1042476|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:12:27 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1459652.4673248143,"samples":729848},{"name":"fromUnixToISOString(new Date())","opsSec":2084091.23697367,"samples":1042476}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|19,019|9510|
|Intl.DateTimeFormat().format(new Date())|18,825|9413|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|18,320|9161|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,387|9209|
|Reusing Intl.DateTimeFormat()|538,374|269330|
|Date.toLocaleDateString()|950,811|475407|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|22,430|11407|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:13:58 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":19019.631437582004,"samples":9510},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":18825.859107270444,"samples":9413},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":18320.989890543377,"samples":9161},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":18387.615788817315,"samples":9209},{"name":"Reusing Intl.DateTimeFormat()","opsSec":538374.6259155395,"samples":269330},{"name":"Date.toLocaleDateString()","opsSec":950811.9633607744,"samples":475407},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":22430.802532564438,"samples":11407}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,081,344|540742|
|Using brackets {}|1,058,633|529318|
|Using '' + |1,066,394|533320|
|Using date.toString()|1,182,731|591366|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:16:45 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using String()","opsSec":1081344.1281370255,"samples":540742},{"name":"Using brackets {}","opsSec":1058633.9441328805,"samples":529318},{"name":"Using '' + ","opsSec":1066394.938177627,"samples":533320},{"name":"Using date.toString()","opsSec":1182731.2643411537,"samples":591366}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,616,135|1833282|
|Using delete property (proto: null)|15,925,212|7964523|
|Using delete property (cached proto: null)|3,911,134|1955594|
|Using undefined assignment|68,568,198|34288329|
|Using undefined assignment (proto: null)|17,360,295|8680368|
|Using undefined property (cached proto: null)|68,331,756|34167420|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:18:34 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using delete property","opsSec":3616135.2866123356,"samples":1833282},{"name":"Using delete property (proto: null)","opsSec":15925212.578379408,"samples":7964523},{"name":"Using delete property (cached proto: null)","opsSec":3911134.925899056,"samples":1955594},{"name":"Using undefined assignment","opsSec":68568198.60420181,"samples":34288329},{"name":"Using undefined assignment (proto: null)","opsSec":17360295.395702858,"samples":8680368},{"name":"Using undefined property (cached proto: null)","opsSec":68331756.0511859,"samples":34167420}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|397,934|198968|
|NodeError|309,452|154727|
|NodeError Range|320,585|160295|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:20:28 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Error","opsSec":397934.6605519326,"samples":198968},{"name":"NodeError","opsSec":309452.78446946264,"samples":154727},{"name":"NodeError Range","opsSec":320585.6015655465,"samples":160295}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,668,351|834292|
|Function returning explicitly undefined|1,590,370|796167|
|Function returning implicitly undefined|1,609,247|804680|
|Function returning string|1,597,391|798777|
|Function returning integer|1,633,205|816642|
|Function returning float|1,626,770|813564|
|Function returning functions|1,625,822|812985|
|Function returning arrow functions|1,609,734|804978|
|Function returning empty object|1,640,031|820092|
|Function returning empty array|1,643,517|821760|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:22:39 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Function returning null","opsSec":1668351.6786920386,"samples":834292},{"name":"Function returning explicitly undefined","opsSec":1590370.785867835,"samples":796167},{"name":"Function returning implicitly undefined","opsSec":1609247.227172814,"samples":804680},{"name":"Function returning string","opsSec":1597391.8998647856,"samples":798777},{"name":"Function returning integer","opsSec":1633205.6061309057,"samples":816642},{"name":"Function returning float","opsSec":1626770.338273427,"samples":813564},{"name":"Function returning functions","opsSec":1625822.6581957783,"samples":812985},{"name":"Function returning arrow functions","opsSec":1609734.2011633585,"samples":804978},{"name":"Function returning empty object","opsSec":1640031.0113471374,"samples":820092},{"name":"Function returning empty array","opsSec":1643517.2125948074,"samples":821760}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|86,148,363|43084483|
|using Array.includes (first item)|81,962,536|40981856|
|Using raw comparison|98,052,306|49026161|
|Using raw comparison (first item)|98,119,436|49063924|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:23:45 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"using Array.includes","opsSec":86148363.10207397,"samples":43084483},{"name":"using Array.includes (first item)","opsSec":81962536.32937889,"samples":40981856},{"name":"Using raw comparison","opsSec":98052306.11552641,"samples":49026161},{"name":"Using raw comparison (first item)","opsSec":98119436.41695485,"samples":49063924}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|46,444,967|23224702|
|Using Object.getOwnPropertyNames()|40,724,230|20366526|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:25:37 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using Object.keys()","opsSec":46444967.11229176,"samples":23224702},{"name":"Using Object.getOwnPropertyNames()","opsSec":40724230.23579786,"samples":20366526}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|121,920,965|61908632|
|Length = 10_000 - Array.at|95,061,048|47594847|
|Length = 1_000_000 - Array.at|85,667,359|42871850|
|Length = 100 - Array[length - 1]|94,578,018|47293318|
|Length = 10_000 - Array[length - 1]|94,460,276|47241069|
|Length = 1_000_000 - Array[length - 1]|93,783,213|46905238|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:27:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":121920965.53108644,"samples":61908632},{"name":"Length = 10_000 - Array.at","opsSec":95061048.64335935,"samples":47594847},{"name":"Length = 1_000_000 - Array.at","opsSec":85667359.41733715,"samples":42871850},{"name":"Length = 100 - Array[length - 1]","opsSec":94578018.42927282,"samples":47293318},{"name":"Length = 10_000 - Array[length - 1]","opsSec":94460276.3025731,"samples":47241069},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":93783213.96996464,"samples":46905238}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|133,900,948|66950666|
|~ (small)|99,528,828|49764460|
|Math.floor (long)|93,444,253|46743142|
|~ (long)|97,647,186|48829039|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:29:52 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Math.floor (small)","opsSec":133900948.77548459,"samples":66950666},{"name":"~ (small)","opsSec":99528828.23442037,"samples":49764460},{"name":"Math.floor (long)","opsSec":93444253.70912418,"samples":46743142},{"name":"~ (long)","opsSec":97647186.62809786,"samples":48829039}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|42,087,222|21092013|
|Object.create({})|2,023,310|1012096|
|Cached Empty.prototype|109,518,429|54759405|
|Empty.prototype|2,558,460|1292097|
|Empty class|1,576,741|788400|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:31:51 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Object.create(null)","opsSec":42087222.190333344,"samples":21092013},{"name":"Object.create({})","opsSec":2023310.7955424606,"samples":1012096},{"name":"Cached Empty.prototype","opsSec":109518429.971048,"samples":54759405},{"name":"Empty.prototype","opsSec":2558460.756102884,"samples":1292097},{"name":"Empty class","opsSec":1576741.0551123954,"samples":788400}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|138,886,192|69520399|
|Using optional chain (obj.field?.field2) (undefined)|96,778,294|48437348|
|Using and operator (obj.field && obj.field.field2) (Valid)|97,483,998|48742896|
|Using and operator (obj.field && obj.field.field2) (undefined)|97,395,365|48700043|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:33:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":138886192.6680458,"samples":69520399},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":96778294.17339094,"samples":48437348},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":97483998.87932462,"samples":48742896},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":97395365.0518652,"samples":48700043}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|126,903,127|63649784|
|Using parseInt(x, 10) - big number (10 len)|96,059,553|48029917|
|Using + - small number (2 len)|95,177,677|48009130|
|Using + - big number (10 len)|95,552,400|47780947|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:35:09 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":126903127.70517415,"samples":63649784},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":96059553.89034086,"samples":48029917},{"name":"Using + - small number (2 len)","opsSec":95177677.96899374,"samples":48009130},{"name":"Using + - big number (10 len)","opsSec":95552400.10463041,"samples":47780947}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,029,781|515197|
|Using ? operator to avoid rejection|1,046,312|524651|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:37:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using if to check function existence","opsSec":1029781.1772214356,"samples":515197},{"name":"Using ? operator to avoid rejection","opsSec":1046312.3007139338,"samples":524651}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|128,952,685|64476840|
|Raw usage underscore usage|97,378,911|48689481|
|Manipulating private properties using #|96,485,951|48245341|
|Manipulating private properties using underscore(_)|95,845,404|47925520|
|Manipulating private properties using Symbol|94,240,969|47120628|
|Manipulating private properties using PrivateSymbol|34,274,005|17138973|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:38:59 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Raw usage private field","opsSec":128952685.00108252,"samples":64476840},{"name":"Raw usage underscore usage","opsSec":97378911.75248154,"samples":48689481},{"name":"Manipulating private properties using #","opsSec":96485951.4867705,"samples":48245341},{"name":"Manipulating private properties using underscore(_)","opsSec":95845404.86526634,"samples":47925520},{"name":"Manipulating private properties using Symbol","opsSec":94240969.5074527,"samples":47120628},{"name":"Manipulating private properties using PrivateSymbol","opsSec":34274005.44904551,"samples":17138973}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,693,128|3846565|
|Adding property in the object creation - small object|7,461,310|3730664|
|Adding property after the function creation - small class|257,625|128813|
|Adding property in the function creation - small class|272,486|136244|
|Adding property after the class creation - small class|264,485|132254|
|Adding property in the class creation - small class|261,686|130844|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:41:37 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":7693128.553691831,"samples":3846565},{"name":"Adding property in the object creation - small object","opsSec":7461310.122700946,"samples":3730664},{"name":"Adding property after the function creation - small class","opsSec":257625.91807495803,"samples":128813},{"name":"Adding property in the function creation - small class","opsSec":272486.3754362297,"samples":136244},{"name":"Adding property after the class creation - small class","opsSec":264485.2135409126,"samples":132254},{"name":"Adding property in the class creation - small class","opsSec":261686.7622216147,"samples":130844}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|141,972,000|70997054|
|Getter|51,186,439|25593227|
|Method|90,270,427|45141991|
|DefineProperty (getter)|96,225,823|48401737|
|DefineProperty (getter & enumerable=false)|51,026,390|25516402|
|DefineProperty (getter & configurable=false)|98,050,149|49025083|
|DefineProperty (getter & enumerable=false & configurable=false)|50,649,881|25324954|
|DefineProperty (writable)|98,139,945|49073116|
|DefineProperty (writable & enumerable=false)|97,910,177|48956172|
|DefineProperty (writable & enumerable=false & configurable=false)|96,212,412|48106216|
|DefineProperties (getter)|51,042,134|25522769|
|DefineProperties (getter & enumerable=false)|51,249,036|25626720|
|DefineProperties (getter & enumerable=false & configurable=false)|50,997,044|25502731|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:43:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Getter (class)","opsSec":141972000.40404108,"samples":70997054},{"name":"Getter","opsSec":51186439.66779689,"samples":25593227},{"name":"Method","opsSec":90270427.89525153,"samples":45141991},{"name":"DefineProperty (getter)","opsSec":96225823.07094258,"samples":48401737},{"name":"DefineProperty (getter & enumerable=false)","opsSec":51026390.79909881,"samples":25516402},{"name":"DefineProperty (getter & configurable=false)","opsSec":98050149.3314746,"samples":49025083},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":50649881.763361245,"samples":25324954},{"name":"DefineProperty (writable)","opsSec":98139945.94018264,"samples":49073116},{"name":"DefineProperty (writable & enumerable=false)","opsSec":97910177.63940956,"samples":48956172},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":96212412.37266788,"samples":48106216},{"name":"DefineProperties (getter)","opsSec":51042134.71462576,"samples":25522769},{"name":"DefineProperties (getter & enumerable=false)","opsSec":51249036.99023602,"samples":25626720},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":50997044.52982399,"samples":25502731}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|129,175,708|64597690|
|Setter|11,286,417|5643213|
|Method|91,866,108|45933077|
|DefineProperty (setter)|93,478,233|46739143|
|DefineProperty (setter & enumerable=false)|11,260,598|5630405|
|DefineProperty (setter & configurable=false)|11,250,294|5625152|
|DefineProperty (setter & enumerable=false & configurable=false)|11,354,682|5677620|
|DefineProperty (writable)|92,395,605|46200783|
|DefineProperty (writable & enumerable=false)|92,335,515|46169613|
|DefineProperty (writable & enumerable=false & configurable=false)|93,621,903|46810962|
|DefineProperties (setter)|90,814,348|45407197|
|DefineProperties (setter & enumerable=false)|11,338,278|5669634|
|DefineProperties (setter & enumerable=false & configurable=false)|10,950,400|5475421|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:45:58 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Setter (class)","opsSec":129175708.3480785,"samples":64597690},{"name":"Setter","opsSec":11286417.738342216,"samples":5643213},{"name":"Method","opsSec":91866108.61814234,"samples":45933077},{"name":"DefineProperty (setter)","opsSec":93478233.46523279,"samples":46739143},{"name":"DefineProperty (setter & enumerable=false)","opsSec":11260598.007981902,"samples":5630405},{"name":"DefineProperty (setter & configurable=false)","opsSec":11250294.504751436,"samples":5625152},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":11354682.893838497,"samples":5677620},{"name":"DefineProperty (writable)","opsSec":92395605.18992677,"samples":46200783},{"name":"DefineProperty (writable & enumerable=false)","opsSec":92335515.77430515,"samples":46169613},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":93621903.0286937,"samples":46810962},{"name":"DefineProperties (setter)","opsSec":90814348.0479399,"samples":45407197},{"name":"DefineProperties (setter & enumerable=false)","opsSec":11338278.553783726,"samples":5669634},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":10950400.260853477,"samples":5475421}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,327,751|1663878|
|Using replaceAll()|3,156,797|1580344|
|Using replaceAll(//g)|3,013,964|1506985|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:47:51 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using replace(//g)","opsSec":3327751.307870656,"samples":1663878},{"name":"Using replaceAll()","opsSec":3156797.001465528,"samples":1580344},{"name":"Using replaceAll(//g)","opsSec":3013964.375942474,"samples":1506985}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|23,292,701|11646383|
|{ ...object, __proto__: null }|2,556,715|1278359|
|{ ...object, newProp: true }|20,484,043|10242723|
|structuredClone|303,968|151985|
|JSON.parse + JSON.stringify|299,845|149943|
|loop + object.keys starting with {}|1,634,080|817081|
|loop + object.keys starting with { __proto__: null }|880,934|440468|
|loop + object.keys starting with { randomProp: true }|652,867|326681|
|object.keys + reduce(FN, {})|1,709,115|854792|
|object.keys + reduce(FN, { __proto__: null })|903,242|451622|
|object.keys + reduce(FN, { newProp: true })|677,099|338572|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:50:01 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"{ ...object }","opsSec":23292701.665558,"samples":11646383},{"name":"{ ...object, __proto__: null }","opsSec":2556715.003530016,"samples":1278359},{"name":"{ ...object, newProp: true }","opsSec":20484043.867197286,"samples":10242723},{"name":"structuredClone","opsSec":303968.0734503505,"samples":151985},{"name":"JSON.parse + JSON.stringify","opsSec":299845.489674963,"samples":149943},{"name":"loop + object.keys starting with {}","opsSec":1634080.063957433,"samples":817081},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":880934.5587910619,"samples":440468},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":652867.3589626862,"samples":326681},{"name":"object.keys + reduce(FN, {})","opsSec":1709115.0256734153,"samples":854792},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":903242.8908177301,"samples":451622},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":677099.8869423658,"samples":338572}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|293,132|146582|
|Sort using first char|1,289,256|645022|
|Sort using localeCompare|1,195,979|598162|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:51:40 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Sort using default","opsSec":293132.7860484104,"samples":146582},{"name":"Sort using first char","opsSec":1289256.323692015,"samples":645022},{"name":"Sort using localeCompare","opsSec":1195979.3546293764,"samples":598162}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,883|944|
|{...smallObject} - Total keys: 2|51,663,073|25884286|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,087|544|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,437|3219|
|{ ...bigObject, ...anotherBigObject }|1,153|577|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,965,856|6482929|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|26,817,557|13409008|
|{ ...smallObject, ...anotherSmallObject }|19,912,762|9959216|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:53:41 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1883.7114257779654,"samples":944},{"name":"{...smallObject} - Total keys: 2","opsSec":51663073.31780523,"samples":25884286},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1087.3742465675793,"samples":544},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6437.09122433513,"samples":3219},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1153.2334042397993,"samples":577},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":12965856.65155091,"samples":6482929},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":26817557.41976812,"samples":13409008},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":19912762.159579255,"samples":9959216}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,071|1036|
|streams.web.Readable reading 1e3 * "some data"|1,959|980|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:55:54 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2071.129019828775,"samples":1036},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":1959.234687664774,"samples":980}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|7,280|3641|
|streams.web.WritableStream writing 1e3 * "some data"|1,665|836|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:57:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":7280.46121627825,"samples":3641},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1665.1685428126616,"samples":836}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|138,728,190|69761724|
|Using backtick (`)|98,047,020|49072593|
|Using array.join|9,834,946|4917476|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:58:46 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using + sign","opsSec":138728190.0378897,"samples":69761724},{"name":"Using backtick (`)","opsSec":98047020.73455843,"samples":49072593},{"name":"Using array.join","opsSec":9834946.000682939,"samples":4917476}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|114,240,851|57120453|
|(short string) (true) String#slice and strict comparison|56,258,835|28131294|
|(long string) (true) String#endsWith|65,294,445|32647421|
|(long string) (true) String#slice and strict comparison|51,784,008|25892011|
|(short string) (false) String#endsWith|93,726,820|46867823|
|(short string) (false) String#slice and strict comparison|56,345,830|28173253|
|(long string) (false) String#endsWith|85,028,950|42515781|
|(long string) (false) String#slice and strict comparison|50,998,013|25499017|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:01:12 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":114240851.39287303,"samples":57120453},{"name":"(short string) (true) String#slice and strict comparison","opsSec":56258835.64817994,"samples":28131294},{"name":"(long string) (true) String#endsWith","opsSec":65294445.27095053,"samples":32647421},{"name":"(long string) (true) String#slice and strict comparison","opsSec":51784008.53615778,"samples":25892011},{"name":"(short string) (false) String#endsWith","opsSec":93726820.12025656,"samples":46867823},{"name":"(short string) (false) String#slice and strict comparison","opsSec":56345830.18811272,"samples":28173253},{"name":"(long string) (false) String#endsWith","opsSec":85028950.08071141,"samples":42515781},{"name":"(long string) (false) String#slice and strict comparison","opsSec":50998013.90678252,"samples":25499017}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|127,904,676|63952376|
|Using indexof|14,268,643|7134325|
|Using RegExp.test|12,166,186|6083597|
|Using RegExp.text with cached regex pattern|13,110,389|6555198|
|Using new RegExp.test|4,613,751|2306910|
|Using new RegExp.test with cached regex pattern|5,212,994|2606727|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:49:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using includes","opsSec":127904676.79205005,"samples":63952376},{"name":"Using indexof","opsSec":14268643.607647665,"samples":7134325},{"name":"Using RegExp.test","opsSec":12166186.712737305,"samples":6083597},{"name":"Using RegExp.text with cached regex pattern","opsSec":13110389.916779079,"samples":6555198},{"name":"Using new RegExp.test","opsSec":4613751.73492933,"samples":2306910},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5212994.99579062,"samples":2606727}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|121,334,034|60667052|
|(short string) (true) String#slice and strict comparison|57,023,251|28511636|
|(long string) (true) String#startsWith|63,417,009|31709292|
|(long string) (true) String#slice and strict comparison|51,989,456|25994731|
|(short string) (false) String#startsWith|95,150,774|47575403|
|(short string) (false) String#slice and strict comparison|57,072,144|28537929|
|(long string) (false) String#startsWith|88,223,364|44111693|
|(long string) (false) String#slice and strict comparison|51,076,645|25538329|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:50:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":121334034.83960013,"samples":60667052},{"name":"(short string) (true) String#slice and strict comparison","opsSec":57023251.585675925,"samples":28511636},{"name":"(long string) (true) String#startsWith","opsSec":63417009.98981206,"samples":31709292},{"name":"(long string) (true) String#slice and strict comparison","opsSec":51989456.385138705,"samples":25994731},{"name":"(short string) (false) String#startsWith","opsSec":95150774.60024439,"samples":47575403},{"name":"(short string) (false) String#slice and strict comparison","opsSec":57072144.8862537,"samples":28537929},{"name":"(long string) (false) String#startsWith","opsSec":88223364.29705238,"samples":44111693},{"name":"(long string) (false) String#slice and strict comparison","opsSec":51076645.23083869,"samples":25538329}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|115,295,209|57655998|
|Using this|95,237,156|47770212|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:52:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using super","opsSec":115295209.01756704,"samples":57655998},{"name":"Using this","opsSec":95237156.702899,"samples":47770212}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
<<<<<<< HEAD
|new Date().getTime()|6,053,726|3026864|
|Date.now()|8,814,235|4407118|
=======
|new Date().getTime()|9,991,341|5011159|
|Date.now()|19,237,094|9619419|
>>>>>>> b73043c6 (chore: add benchmark results from bench-node)


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
<<<<<<< HEAD
* __Run:__ Thu Sep 26 2024 00:32:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Date().getTime()","opsSec":6053726.631853123,"samples":3026864},{"name":"Date.now()","opsSec":8814235.559294535,"samples":4407118}]}-->
=======
* __Run:__ Mon Sep 30 2024 21:53:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"new Date().getTime()","opsSec":9991341.245256856,"samples":5011159},{"name":"Date.now()","opsSec":19237094.00353183,"samples":9619419}]}-->
>>>>>>> b73043c6 (chore: add benchmark results from bench-node)
