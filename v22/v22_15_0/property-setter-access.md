## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|98,169,369|49111350|
|Setter|11,496,321|5748164|
|Method|92,732,039|46374995|
|DefineProperty (setter)|91,833,450|45920429|
|DefineProperty (setter & enumerable=false)|11,502,586|5751354|
|DefineProperty (setter & configurable=false)|11,585,174|5793325|
|DefineProperty (setter & enumerable=false & configurable=false)|11,635,673|5817839|
|DefineProperty (writable)|99,043,059|49521541|
|DefineProperty (writable & enumerable=false)|99,111,912|49561012|
|DefineProperty (writable & enumerable=false & configurable=false)|98,944,566|49472296|
|DefineProperties (setter)|97,207,257|48603637|
|DefineProperties (setter & enumerable=false)|11,376,496|5688607|
|DefineProperties (setter & enumerable=false & configurable=false)|11,171,587|5585796|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:31:55 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Setter (class)","samples":49111350,"opsSec":98169369.68625668},{"name":"Setter","samples":5748164,"opsSec":11496321.125199968},{"name":"Method","samples":46374995,"opsSec":92732039.85904449},{"name":"DefineProperty (setter)","samples":45920429,"opsSec":91833450.16290917},{"name":"DefineProperty (setter & enumerable=false)","samples":5751354,"opsSec":11502586.118597487},{"name":"DefineProperty (setter & configurable=false)","samples":5793325,"opsSec":11585174.396337138},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5817839,"opsSec":11635673.229373977},{"name":"DefineProperty (writable)","samples":49521541,"opsSec":99043059.22009638},{"name":"DefineProperty (writable & enumerable=false)","samples":49561012,"opsSec":99111912.00806546},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":49472296,"opsSec":98944566.47230184},{"name":"DefineProperties (setter)","samples":48603637,"opsSec":97207257.47476622},{"name":"DefineProperties (setter & enumerable=false)","samples":5688607,"opsSec":11376496.188596483},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5585796,"opsSec":11171587.419649158}]}-->
