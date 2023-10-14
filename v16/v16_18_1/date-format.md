## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|6,628|82|
|Intl.DateTimeFormat().format(new Date())|6,431|81|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|8,097|77|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|8,235|87|
|Reusing Intl.DateTimeFormat()|415,915|91|
|Date.toLocaleDateString()|358,894|83|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|8,843|88|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:44:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","hz":6627.8767889974715,"cycles":3,"stats":{"deviation":0.00007414113802642042,"mean":0.0001508778801772595,"moe":0.000016047537273679547,"rme":10.636109981679244,"sem":0.000008187519017183442,"variance":5.4969083478527244e-9}},{"name":"Intl.DateTimeFormat().format(new Date())","hz":6430.961682483601,"cycles":4,"stats":{"deviation":0.00015072462464555571,"mean":0.00015549773881000728,"moe":0.0000328244738116988,"rme":21.109293333072145,"sem":0.00001674718051617286,"variance":2.2717912474543664e-8}},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","hz":8096.64652536509,"cycles":4,"stats":{"deviation":0.000019778099991168095,"mean":0.00012350792354182813,"moe":0.000004417690405488957,"rme":3.5768477671740864,"sem":0.000002253923676269876,"variance":3.9117323926064344e-10}},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","hz":8234.663582505915,"cycles":4,"stats":{"deviation":0.00002968916294589434,"mean":0.00012143786931677991,"moe":0.000006238704253654481,"rme":5.137363071959331,"sem":0.000003183012374313511,"variance":8.814463964278654e-10}},{"name":"Reusing Intl.DateTimeFormat()","hz":415915.04576125107,"cycles":5,"stats":{"deviation":1.400370787258564e-7,"mean":0.0000024043371601758137,"moe":2.8772554256601166e-8,"rme":1.1966938220302352,"sem":1.467987462071488e-8,"variance":1.9610383418071707e-14}},{"name":"Date.toLocaleDateString()","hz":358893.8873482506,"cycles":3,"stats":{"deviation":0.000002834405803947601,"mean":0.0000027863389019764938,"moe":6.097882529383518e-7,"rme":21.884927655634336,"sem":3.1111645558079175e-7,"variance":8.033856261451846e-12}},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","hz":8843.472666530264,"cycles":4,"stats":{"deviation":0.00003993358062074044,"mean":0.00011307775098177015,"moe":0.000008343590635086656,"rme":7.378631572210673,"sem":0.000004256933997493192,"variance":1.5946908611931763e-9}},{"name":"Format using date.get*","hz":0,"cycles":0,"stats":{"deviation":0,"mean":0,"moe":0,"rme":0,"sem":0,"variance":0}}]}-->
