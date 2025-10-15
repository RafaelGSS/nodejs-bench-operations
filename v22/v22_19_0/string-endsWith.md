## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|81,571,058|40785544|
|(short string) (true) String#slice and strict comparison|60,656,620|30328312|
|(long string) (true) String#endsWith|66,190,144|33095565|
|(long string) (true) String#slice and strict comparison|54,481,141|27241873|
|(short string) (false) String#endsWith|86,168,215|43084110|
|(short string) (false) String#slice and strict comparison|61,439,623|30719997|
|(long string) (false) String#endsWith|83,792,138|41912712|
|(long string) (false) String#slice and strict comparison|54,765,325|27382815|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:59:34 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#endsWith","samples":40785544,"opsSec":81571058.96070302},{"name":"(short string) (true) String#slice and strict comparison","samples":30328312,"opsSec":60656620.239289545},{"name":"(long string) (true) String#endsWith","samples":33095565,"opsSec":66190144.29637113},{"name":"(long string) (true) String#slice and strict comparison","samples":27241873,"opsSec":54481141.58350774},{"name":"(short string) (false) String#endsWith","samples":43084110,"opsSec":86168215.86392564},{"name":"(short string) (false) String#slice and strict comparison","samples":30719997,"opsSec":61439623.02755616},{"name":"(long string) (false) String#endsWith","samples":41912712,"opsSec":83792138.74597311},{"name":"(long string) (false) String#slice and strict comparison","samples":27382815,"opsSec":54765325.395260155}]}-->
