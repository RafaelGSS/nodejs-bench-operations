## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|19,377,166|9688584|
|Using dot notation|19,496,891|9748446|
|Using define property (writable)|3,298,636|1649319|
|Using define property initialized (writable)|4,136,324|2068163|
|Using define property (getter)|1,854,986|927494|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:18:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Directly in the object","opsSec":19377166.139760967,"samples":9688584},{"name":"Using dot notation","opsSec":19496891.298288573,"samples":9748446},{"name":"Using define property (writable)","opsSec":3298636.7399204588,"samples":1649319},{"name":"Using define property initialized (writable)","opsSec":4136324.5770968515,"samples":2068163},{"name":"Using define property (getter)","opsSec":1854986.7757120926,"samples":927494}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.09ms
new Array(length)|100|0.008ms
array.push|1,000|0.028ms
new Array(length)|1,000|0.014ms
array.push|10,000|0.261ms
new Array(length)|10,000|0.303ms
array.push|1,000,000|33.043ms
new Array(length)|1,000,000|7.515ms
array.push|100,000,000|1,818.207ms
new Array(length)|100,000,000|4,528.664ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.006ms
new Array(length)|10|0.004ms
array.push|100|0.012ms
new Array(length)|100|0.012ms
array.push|1,000|0.041ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.225ms
new Array(length)|10,000|0.163ms
array.push|1,000,000|23.125ms
new Array(length)|1,000,000|4.625ms
array.push|100,000,000|2,528.888ms
new Array(length)|100,000,000|4,140.393ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|273|137|
|Array.from|23|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:32:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Array","opsSec":273.40622892869817,"samples":137},{"name":"Array.from","opsSec":23.129795342655715,"samples":12}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,400|2201|
|new Blob (1024)|506|257|
|text (128)|4,344|2173|
|text (1024)|544|273|
|arrayBuffer (128)|4,379|2190|
|arrayBuffer (1024)|545|273|
|slice (0, 64)|66,920|33461|
|slice (0, 512)|28,583|14292|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:37:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Blob (128)","opsSec":4400.652370622016,"samples":2201},{"name":"new Blob (1024)","opsSec":506.825221001075,"samples":257},{"name":"text (128)","opsSec":4344.653782957618,"samples":2173},{"name":"text (1024)","opsSec":544.3196634262116,"samples":273},{"name":"arrayBuffer (128)","opsSec":4379.911254238047,"samples":2190},{"name":"arrayBuffer (1024)","opsSec":545.5854140085693,"samples":273},{"name":"slice (0, 64)","opsSec":66920.75995833614,"samples":33461},{"name":"slice (0, 512)","opsSec":28583.226080571625,"samples":14292}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|278,922|139462|
|[True conditional] Using constructor name|288,055|144028|
|[True conditional] Check if property is valid then instanceof |292,332|146167|
|[False conditional] Using instanceof only|19,239,873|9619937|
|[False conditional] Using constructor name|19,588,264|9794133|
|[False conditional] Check if property is valid then instanceof |19,343,301|9671651|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:46:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":278922.26008303446,"samples":139462},{"name":"[True conditional] Using constructor name","opsSec":288055.8046980763,"samples":144028},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":292332.80494337063,"samples":146167},{"name":"[False conditional] Using instanceof only","opsSec":19239873.96149182,"samples":9619937},{"name":"[False conditional] Using constructor name","opsSec":19588264.74629804,"samples":9794133},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":19343301.96139811,"samples":9671651}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|7,076|3539|
|crypto.verify('RSA-SHA256')|7,001|3501|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:53:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":7076.371047690146,"samples":3539},{"name":"crypto.verify('RSA-SHA256')","opsSec":7001.649371403115,"samples":3501}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,295,988|647995|
|fromUnixToISOString(new Date())|1,878,000|939001|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:58:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1295988.0456500752,"samples":647995},{"name":"fromUnixToISOString(new Date())","opsSec":1878000.354870427,"samples":939001}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|19,093|9547|
|Intl.DateTimeFormat().format(new Date())|20,111|10056|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|22,189|11095|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|21,636|10819|
|Reusing Intl.DateTimeFormat()|920,668|460335|
|Date.toLocaleDateString()|904,369|452185|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|21,680|10841|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:05:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":19093.40745519683,"samples":9547},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":20111.771811836377,"samples":10056},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":22189.52989261667,"samples":11095},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":21636.00156908968,"samples":10819},{"name":"Reusing Intl.DateTimeFormat()","opsSec":920668.2139051806,"samples":460335},{"name":"Date.toLocaleDateString()","opsSec":904369.4175865625,"samples":452185},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":21680.215111249996,"samples":10841}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|965,237|482619|
|Using brackets {}|971,754|485878|
|Using '' + |952,095|476048|
|Using date.toString()|1,058,561|529281|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:11:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using String()","opsSec":965237.0212494644,"samples":482619},{"name":"Using brackets {}","opsSec":971754.3344128251,"samples":485878},{"name":"Using '' + ","opsSec":952095.7010423664,"samples":476048},{"name":"Using date.toString()","opsSec":1058561.3458092308,"samples":529281}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,883,505|1441753|
|Using delete property (proto: null)|8,463,561|4231781|
|Using delete property (cached proto: null)|2,866,974|1433488|
|Using undefined assignment|19,392,256|9696129|
|Using undefined assignment (proto: null)|8,906,971|4453486|
|Using undefined property (cached proto: null)|19,111,386|9555694|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:19:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using delete property","opsSec":2883505.4175274917,"samples":1441753},{"name":"Using delete property (proto: null)","opsSec":8463561.492197715,"samples":4231781},{"name":"Using delete property (cached proto: null)","opsSec":2866974.216739368,"samples":1433488},{"name":"Using undefined assignment","opsSec":19392256.332056005,"samples":9696129},{"name":"Using undefined assignment (proto: null)","opsSec":8906971.803996783,"samples":4453486},{"name":"Using undefined property (cached proto: null)","opsSec":19111386.203410894,"samples":9555694}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|290,900|145451|
|NodeError|289,041|144521|
|NodeError Range|289,890|144946|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:27:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Error","opsSec":290900.3872482347,"samples":145451},{"name":"NodeError","opsSec":289041.416714374,"samples":144521},{"name":"NodeError Range","opsSec":289890.0246892119,"samples":144946}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,446,504|723253|
|Function returning explicitly undefined|1,437,575|718788|
|Function returning implicitly undefined|1,505,885|752943|
|Function returning string|1,496,475|748238|
|Function returning integer|1,507,013|753507|
|Function returning float|1,438,580|719291|
|Function returning functions|1,437,605|718803|
|Function returning arrow functions|1,500,136|750069|
|Function returning empty object|1,467,537|733769|
|Function returning empty array|1,500,098|750050|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:34:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Function returning null","opsSec":1446504.7415416802,"samples":723253},{"name":"Function returning explicitly undefined","opsSec":1437575.3013366347,"samples":718788},{"name":"Function returning implicitly undefined","opsSec":1505885.235011844,"samples":752943},{"name":"Function returning string","opsSec":1496475.7396144453,"samples":748238},{"name":"Function returning integer","opsSec":1507013.0475643394,"samples":753507},{"name":"Function returning float","opsSec":1438580.9728528901,"samples":719291},{"name":"Function returning functions","opsSec":1437605.6837304393,"samples":718803},{"name":"Function returning arrow functions","opsSec":1500136.8809015683,"samples":750069},{"name":"Function returning empty object","opsSec":1467537.9383586661,"samples":733769},{"name":"Function returning empty array","opsSec":1500098.7609176438,"samples":750050}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|15,694,131|7847066|
|using Array.includes (first item)|17,685,397|8842699|
|Using raw comparison|19,354,659|9677330|
|Using raw comparison (first item)|19,604,130|9802066|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:43:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"using Array.includes","opsSec":15694131.592095178,"samples":7847066},{"name":"using Array.includes (first item)","opsSec":17685397.363221638,"samples":8842699},{"name":"Using raw comparison","opsSec":19354659.76776738,"samples":9677330},{"name":"Using raw comparison (first item)","opsSec":19604130.196503427,"samples":9802066}]}-->
