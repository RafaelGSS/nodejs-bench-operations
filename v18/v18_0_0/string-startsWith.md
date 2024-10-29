## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|60,131,440|30253855|
|(short string) (true) String#slice and strict comparison|46,397,624|23204782|
|(long string) (true) String#startsWith|48,223,579|24111800|
|(long string) (true) String#slice and strict comparison|44,016,038|22009483|
|(short string) (false) String#startsWith|56,852,699|28431236|
|(short string) (false) String#slice and strict comparison|54,808,786|27405965|
|(long string) (false) String#startsWith|53,233,408|26616715|
|(long string) (false) String#slice and strict comparison|48,980,614|24528955|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:57:14 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":60131440.87607862,"samples":30253855},{"name":"(short string) (true) String#slice and strict comparison","opsSec":46397624.31374484,"samples":23204782},{"name":"(long string) (true) String#startsWith","opsSec":48223579.55320227,"samples":24111800},{"name":"(long string) (true) String#slice and strict comparison","opsSec":44016038.229201145,"samples":22009483},{"name":"(short string) (false) String#startsWith","opsSec":56852699.816839285,"samples":28431236},{"name":"(short string) (false) String#slice and strict comparison","opsSec":54808786.71608183,"samples":27405965},{"name":"(long string) (false) String#startsWith","opsSec":53233408.49370297,"samples":26616715},{"name":"(long string) (false) String#slice and strict comparison","opsSec":48980614.47598528,"samples":24528955}]}-->
