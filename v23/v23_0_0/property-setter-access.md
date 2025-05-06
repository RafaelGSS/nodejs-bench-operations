## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|94,337,593|47168828|
|Setter|11,105,232|5552692|
|Method|92,745,740|46376186|
|DefineProperty (setter)|94,800,258|47412449|
|DefineProperty (setter & enumerable=false)|11,257,744|5640453|
|DefineProperty (setter & configurable=false)|11,552,313|5776161|
|DefineProperty (setter & enumerable=false & configurable=false)|11,472,042|5736027|
|DefineProperty (writable)|94,859,022|47439307|
|DefineProperty (writable & enumerable=false)|94,736,560|47368953|
|DefineProperty (writable & enumerable=false & configurable=false)|94,786,072|47414588|
|DefineProperties (setter)|94,251,878|47131424|
|DefineProperties (setter & enumerable=false)|11,517,169|5766444|
|DefineProperties (setter & enumerable=false & configurable=false)|11,418,355|5709936|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:32:16 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Setter (class)","samples":47168828,"opsSec":94337593.359838},{"name":"Setter","samples":5552692,"opsSec":11105232.01379466},{"name":"Method","samples":46376186,"opsSec":92745740.67954141},{"name":"DefineProperty (setter)","samples":47412449,"opsSec":94800258.27527116},{"name":"DefineProperty (setter & enumerable=false)","samples":5640453,"opsSec":11257744.541535135},{"name":"DefineProperty (setter & configurable=false)","samples":5776161,"opsSec":11552313.728543371},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5736027,"opsSec":11472042.688565908},{"name":"DefineProperty (writable)","samples":47439307,"opsSec":94859022.19699152},{"name":"DefineProperty (writable & enumerable=false)","samples":47368953,"opsSec":94736560.93030792},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":47414588,"opsSec":94786072.41271462},{"name":"DefineProperties (setter)","samples":47131424,"opsSec":94251878.96632591},{"name":"DefineProperties (setter & enumerable=false)","samples":5766444,"opsSec":11517169.091212256},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5709936,"opsSec":11418355.893541167}]}-->
