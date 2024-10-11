## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|55,254,523|27641625|
|(short string) (true) String#slice and strict comparison|52,806,642|26406512|
|(long string) (true) String#endsWith|45,734,762|22870152|
|(long string) (true) String#slice and strict comparison|47,208,482|23604248|
|(short string) (false) String#endsWith|55,626,229|27818290|
|(short string) (false) String#slice and strict comparison|53,569,781|26784905|
|(long string) (false) String#endsWith|51,187,045|25593528|
|(long string) (false) String#slice and strict comparison|47,258,299|23632410|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:00:49 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":55254523.50475702,"samples":27641625},{"name":"(short string) (true) String#slice and strict comparison","opsSec":52806642.528477006,"samples":26406512},{"name":"(long string) (true) String#endsWith","opsSec":45734762.867600486,"samples":22870152},{"name":"(long string) (true) String#slice and strict comparison","opsSec":47208482.49837401,"samples":23604248},{"name":"(short string) (false) String#endsWith","opsSec":55626229.07129441,"samples":27818290},{"name":"(short string) (false) String#slice and strict comparison","opsSec":53569781.71515526,"samples":26784905},{"name":"(long string) (false) String#endsWith","opsSec":51187045.35309457,"samples":25593528},{"name":"(long string) (false) String#slice and strict comparison","opsSec":47258299.20535904,"samples":23632410}]}-->
