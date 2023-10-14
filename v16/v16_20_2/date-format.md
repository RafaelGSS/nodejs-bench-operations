## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,465|81|
|Intl.DateTimeFormat().format(new Date())|7,773|80|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|7,942|69|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|10,312|92|
|Reusing Intl.DateTimeFormat()|366,981|79|
|Date.toLocaleDateString()|455,792|98|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|10,822|83|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:44:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","hz":8464.635414979452,"cycles":6,"stats":{"deviation":0.000014003611238394734,"mean":0.00011813857903795228,"moe":0.0000030496753363615197,"rme":2.581438985635509,"sem":0.0000015559568042660814,"variance":1.961011277160953e-10}},{"name":"Intl.DateTimeFormat().format(new Date())","hz":7772.8548747635405,"cycles":5,"stats":{"deviation":0.00013361481564151966,"mean":0.00012865285871305055,"moe":0.000029279637436402933,"rme":22.758637257885358,"sem":0.000014938590528777006,"variance":1.7852918958917283e-8}},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","hz":7941.978254972472,"cycles":5,"stats":{"deviation":0.00015485125660768504,"mean":0.0001259132130428461,"moe":0.00003653812523111425,"rme":29.018499606297045,"sem":0.000018641900628119517,"variance":2.3978911672979115e-8}},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","hz":10311.659213270508,"cycles":5,"stats":{"deviation":0.000013153846885957943,"mean":0.00009697760363463699,"moe":0.0000026879113425015583,"rme":2.7716825759360493,"sem":0.0000013713833380109992,"variance":1.730236878992255e-10}},{"name":"Reusing Intl.DateTimeFormat()","hz":366981.0867478766,"cycles":4,"stats":{"deviation":0.000004470765038670163,"mean":0.000002724936069217704,"moe":9.8588071596661e-7,"rme":36.179957654920116,"sem":5.030003652890868e-7,"variance":1.9987740030995425e-11}},{"name":"Date.toLocaleDateString()","hz":455791.770521048,"cycles":3,"stats":{"deviation":8.938474707865216e-8,"mean":0.000002193984325028135,"moe":1.7697277022308626e-8,"rme":0.8066273227399507,"sem":9.029222970565626e-9,"variance":7.989633010314616e-15}},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","hz":10822.480996558654,"cycles":5,"stats":{"deviation":0.00002360519681295739,"mean":0.00009240025464752317,"moe":0.0000050783736417671196,"rme":5.496060223144902,"sem":0.000002591006960085265,"variance":5.572053165784536e-10}},{"name":"Format using date.get*","hz":0,"cycles":0,"stats":{"deviation":0,"mean":0,"moe":0,"rme":0,"sem":0,"variance":0}}]}-->
