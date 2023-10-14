## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|769,033,732|80|
|Using dot notation|663,245,107|79|
|Using define property (writable)|2,937,010|83|
|Using define property initialized (writable)|3,754,436|83|
|Using define property (getter)|1,588,469|82|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:29:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Directly in the object","hz":769033732.0840257,"cycles":6,"stats":{"deviation":2.4038055735216086e-10,"mean":1.3003330780953813e-9,"moe":5.267571213745441e-11,"rme":4.050939949525038,"sem":2.6875363335435924e-11,"variance":5.77828123529355e-20}},{"name":"Using dot notation","hz":663245107.0705248,"cycles":8,"stats":{"deviation":1.2844954862176432e-10,"mean":1.5077382242846565e-9,"moe":2.8325338474616187e-11,"rme":1.8786642149405668,"sem":1.4451703303375606e-11,"variance":1.6499286541135e-20}},{"name":"Using define property (writable)","hz":2937010.4986294126,"cycles":7,"stats":{"deviation":3.8768998386509724e-8,"mean":3.404822694595953e-7,"moe":8.340682820136008e-9,"rme":2.4496673008477434,"sem":4.255450418436739e-9,"variance":1.5030352358931934e-15}},{"name":"Using define property initialized (writable)","hz":3754435.5693027554,"cycles":4,"stats":{"deviation":2.5421145532150424e-8,"mean":2.663516210469187e-7,"moe":5.46905312575636e-9,"rme":2.0533207585746096,"sem":2.7903332274267143e-9,"variance":6.462346401667715e-16}},{"name":"Using define property (getter)","hz":1588469.0187195742,"cycles":4,"stats":{"deviation":7.406918164413298e-8,"mean":6.295369870078268e-7,"moe":1.6031962617590167e-8,"rme":2.5466275927312347,"sem":8.179572764076615e-9,"variance":5.486243669431566e-15}}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.025ms
new Array(length)|10|0.006ms
array.push|100|0.061ms
new Array(length)|100|0.015ms
array.push|1,000|0.084ms
new Array(length)|1,000|0.041ms
array.push|10,000|0.644ms
new Array(length)|10,000|0.594ms
array.push|1,000,000|40.728ms
new Array(length)|1,000,000|7.997ms
array.push|100,000,000|1,990.905ms
new Array(length)|100,000,000|5,494.342ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.022ms
array.push|100|0.056ms
new Array(length)|100|0.011ms
array.push|1,000|0.046ms
new Array(length)|1,000|0.02ms
array.push|10,000|0.372ms
new Array(length)|10,000|0.261ms
array.push|1,000,000|32.965ms
new Array(length)|1,000,000|5.606ms
array.push|100,000,000|3,201.022ms
new Array(length)|100,000,000|5,411.836ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|324|75|
|Array.from|16|44|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:32:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Array","hz":323.934106965316,"cycles":2,"stats":{"deviation":0.00026759375465345474,"mean":0.003087047576953887,"moe":0.000060562167902792825,"rme":1.961815177547472,"sem":0.00003089906525652695,"variance":7.160641752953332e-8}},{"name":"Array.from","hz":16.22187098905714,"cycles":1,"stats":{"deviation":0.0007044335011936811,"mean":0.06164517031818181,"moe":0.00020814679826831788,"rme":0.33765305082939556,"sem":0.00010619734605526422,"variance":4.96226557603988e-7}}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|2,656|82|
|new Blob (1024)|364|64|
|text (128)|2,809|75|
|text (1024)|340|78|
|arrayBuffer (128)|2,371|77|
|arrayBuffer (1024)|306|81|
|slice (0, 64)|32,790|60|
|slice (0, 512)|11,242|67|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:34:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"new Blob (128)","hz":2655.57372548208,"cycles":3,"stats":{"deviation":0.00004991655700925826,"mean":0.00037656646110190926,"moe":0.000010804228671191554,"rme":2.8691425783316458,"sem":0.000005512361566934467,"variance":2.49166266365853e-9}},{"name":"new Blob (1024)","hz":364.16318842676435,"cycles":2,"stats":{"deviation":0.00041053192218355625,"mean":0.0027460216512276794,"moe":0.00010058032093497128,"rme":3.662765036466638,"sem":0.00005131649027294453,"variance":1.685364591317255e-7}},{"name":"text (128)","hz":2808.5251319085164,"cycles":4,"stats":{"deviation":0.00002502051389845364,"mean":0.00035605876858237545,"moe":0.000005662675370337712,"rme":1.5903766091432834,"sem":0.000002889120086906996,"variance":6.260261157427116e-10}},{"name":"text (1024)","hz":339.74397610449176,"cycles":2,"stats":{"deviation":0.0003065526394560148,"mean":0.002943392879149797,"moe":0.00006803209262884099,"rme":2.3113493652431525,"sem":0.0000347102513412454,"variance":9.397452075744942e-8}},{"name":"arrayBuffer (128)","hz":2371.276135943174,"cycles":3,"stats":{"deviation":0.000028853402414781554,"mean":0.00042171385476464155,"moe":0.000006444774729140413,"rme":1.5282340516740294,"sem":0.0000032881503720104152,"variance":8.32518830909322e-10}},{"name":"arrayBuffer (1024)","hz":306.3957321996947,"cycles":2,"stats":{"deviation":0.00022324570442428963,"mean":0.0032637530321350753,"moe":0.00004861795340795641,"rme":1.4896333432481443,"sem":0.000024805078269365514,"variance":4.983864454389729e-8}},{"name":"slice (0, 64)","hz":32790.098662748394,"cycles":3,"stats":{"deviation":0.000022237941625949333,"mean":0.000030497011011926674,"moe":0.000005626975601320651,"rme":18.450908514018213,"sem":0.0000028709059190411483,"variance":4.945260477591301e-10}},{"name":"slice (0, 512)","hz":11241.691854025425,"cycles":4,"stats":{"deviation":0.00011638186097325491,"mean":0.00008895458201355342,"moe":0.00002786788228498042,"rme":31.32821452720038,"sem":0.000014218307288255315,"variance":1.3544737563598033e-8}}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|177,961|61|
|[True conditional] Using constructor name|144,976|94|
|[True conditional] Check if property is valid then instanceof |146,595|96|
|[False conditional] Using instanceof only|716,804,341|97|
|[False conditional] Using constructor name|715,438,387|96|
|[False conditional] Check if property is valid then instanceof |717,910,496|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:38:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"[True conditional] Using instanceof only","hz":177960.78067782472,"cycles":3,"stats":{"deviation":0.0000011359136032553579,"mean":0.000005619215628247734,"moe":2.85060113922933e-7,"rme":5.0729520413834805,"sem":1.454388336341495e-7,"variance":1.2902997140605706e-12}},{"name":"[True conditional] Using constructor name","hz":144976.11047442746,"cycles":3,"stats":{"deviation":3.708543984899323e-7,"mean":0.0000068976881551556825,"moe":7.497139275072407e-8,"rme":1.0869060917850664,"sem":3.8250710587104115e-8,"variance":1.375329848793295e-13}},{"name":"[True conditional] Check if property is valid then instanceof ","hz":146594.757997094,"cycles":3,"stats":{"deviation":3.2316451855042284e-7,"mean":0.0000068215263196506874,"moe":6.464636749602587e-8,"rme":0.9476818598471117,"sem":3.298284055919687e-8,"variance":1.044353060499266e-13}},{"name":"[False conditional] Using instanceof only","hz":716804341.2763038,"cycles":8,"stats":{"deviation":3.272054029575534e-11,"mean":1.3950808364517617e-9,"moe":6.511644321637466e-12,"rme":0.46675749185969273,"sem":3.3222675110395237e-12,"variance":1.0706337572461488e-21}},{"name":"[False conditional] Using constructor name","hz":715438387.4842683,"cycles":7,"stats":{"deviation":4.829732614471628e-11,"mean":1.3977444004875807e-9,"moe":9.661477407952468e-12,"rme":0.6912191817461201,"sem":4.9293252081390146e-12,"variance":2.3326317127290946e-21}},{"name":"[False conditional] Check if property is valid then instanceof ","hz":717910496.1002924,"cycles":6,"stats":{"deviation":4.2036999020836696e-11,"mean":1.3929312991410834e-9,"moe":8.498139368134008e-12,"rme":0.6100903449706511,"sem":4.335785391905106e-12,"variance":1.7671092866778256e-21}}]}-->
