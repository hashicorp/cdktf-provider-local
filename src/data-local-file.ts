// https://www.terraform.io/docs/providers/local/d/file
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLocalFileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Path to the file that will be read. The data source will return an error if the file does not exist.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/local/d/file#filename DataLocalFile#filename}
  */
  readonly filename: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/local/d/file#id DataLocalFile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/local/d/file local_file}
*/
export class DataLocalFile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "local_file";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/local/d/file local_file} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataLocalFileConfig
  */
  public constructor(scope: Construct, id: string, config: DataLocalFileConfig) {
    super(scope, id, {
      terraformResourceType: 'local_file',
      terraformGeneratorMetadata: {
        providerName: 'local',
        providerVersion: '2.2.3',
        providerVersionConstraint: '~> 2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._filename = config.filename;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // content - computed: true, optional: false, required: false
  public get content() {
    return this.getStringAttribute('content');
  }

  // content_base64 - computed: true, optional: false, required: false
  public get contentBase64() {
    return this.getStringAttribute('content_base64');
  }

  // filename - computed: false, optional: false, required: true
  private _filename?: string; 
  public get filename() {
    return this.getStringAttribute('filename');
  }
  public set filename(value: string) {
    this._filename = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameInput() {
    return this._filename;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filename: cdktf.stringToTerraform(this._filename),
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
