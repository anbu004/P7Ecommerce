import { Image, Text, View, TextInput, Picker, TouchableHighlight, Button, TouchableOpacity } from 'react-native';
import React, { useState, Component } from "react";
import ImagePicker from 'react-native-image-picker';
import renderIf from '../../../config/renderIf';
import Icon from 'react-native-vector-icons/FontAwesome';
import DatePicker from 'react-native-datepicker';
import api from '../../../config/OdooConnect';
import Toast from 'react-native-simple-toast';

const mainDivStyle = {
  padding: 15,
}
const submitBtn = {
  width: "100%",
  backgroundColor: "#fb5b5a",
  borderRadius: 7,
  height: 40,
  marginTop: 4,
  marginBottom: 10,
  alignItems: "center",
  justifyContent: "center",
}
const submitBtnText = {
  color: 'white',
  fontSize: 17,
}
const textBox = {
  textLabel: {
    fontSize: 17,
    color: 'white',
  },
  inputText: {
    color: "white",
    width: "100%",
    backgroundColor: "#444444",
    borderRadius: 7,
    height: 40,
    marginTop: 4,
    borderWidth: 2,
    marginBottom: 10,
    borderColor: "#444444",
  },

};
const button = {
  color: "black",
  width: "100%",
  backgroundColor: "#444444",
  borderRadius: 7,
  height: 40,
  marginTop: 4,
  marginBottom: 10
};
const buttonText = {
  textAlign: 'center',
  fontSize: 15,
  marginTop: 10,
  color: 'black',
  fontWeight: 'bold',
}
const subElStyle = {
  elevation: 4, shadowOffset: {}, shadowColor: "grey", shadowOpacity: 0.5, shadowRadius: 10, padding: 5, width: '100%', marginBottom: 5, backgroundColor: "#202225", borderRadius: 8,
}


class ClientCreateForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      resourcePath: {},
      adhar_resourcePath: {},
      passport_resourcePath: {},
      licence_resourcePath: {},
      vater_resourcePath: {},
      pancard_resourcePath: {},
      profile_resourcePath: {},
      date: new Date(),
      name: '',
      profile_id: '',
      email: '',
      phone: '',
      mobile: '',
      website: '',
      father_name: '',
      mother_name: '',
      spouse_name: '',
      date_of_birth: new Date(),
      birth_place: '',
      occupation: '',
      local_address: '',
      permenent_address: '',
      facebook: '',
      youtube: '',
      instagram: '',
      twitter: '',
    };
  }
  // state = {
  //   data: {
  //     email: "",
  //     password: ""
  //   },
  //   errors: {},
  //   fontLoaded: false,
  //   showLoading: false,
  // };

  selectAdharFile = () => {
    var options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, res => {
      console.log('Response = ', res);
      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);

      } else {
        let source = res;
        this.setState({
          adhar_resourcePath: source,
        });
      }
    });
  };
  selectProfileFile = () => {
    var options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, res => {
      console.log('Response = ', res);
      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);

      } else {
        let source = res;
        this.setState({
          profile_resourcePath: source,
        });
      }
    });
  };
  selectPassportFile = () => {
    var options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, res => {
      console.log('Response = ', res);
      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);

      } else {
        let source = res;
        this.setState({
          passport_resourcePath: source,
        });
      }
    });
  };
  selectLicenceFile = () => {
    var options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, res => {
      console.log('Response = ', res);
      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);

      } else {
        let source = res;
        this.setState({
          licence_resourcePath: source,
        });
      }
    });
  };
  selectVoterFile = () => {
    var options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, res => {
      console.log('Response = ', res);
      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);

      } else {
        let source = res;
        this.setState({
          vater_resourcePath: source,
        });
      }
    });
  };
  selectPanFile = () => {
    var options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, res => {
      console.log('Response = ', res);
      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);

      } else {
        let source = res;
        this.setState({
          pancard_resourcePath: source,
        });
      }
    });
  };
  clearPassportFile = () => {
    this.setState({
      passport_resourcePath: {},
    });
  }
  clearLicenceFile = () => {
    this.setState({
      licence_resourcePath: {},
    });
  }
  clearPancardFile = () => {
    this.setState({
      pancard_resourcePath: {},
    });
  }
  clearAdharFile = () => {
    this.setState({
      adhar_resourcePath: {},
    });
  }
  clearProfileFile = () => {
    this.setState({
      vater_resourcePath: {},
    });
  }
  clearProfileFile = () => {
    this.setState({
      profile_resourcePath: {},
    });
  };

  clearRecord() {
    this.state.name = "";
    this.state.profile_id = "";
    this.state.email = "";
    this.state.phone = "";
    this.state.mobile = "";
    this.state.website = "";
    this.state.father_name = "";
    this.state.mother_name = "";
    this.state.spouse_name = "";
    this.state.date_of_birth = "";
    this.state.birth_place = "";
    this.state.occupation = "";
    this.state.local_address = "";
    this.state.permenent_address = "";
  }
  createClient = () => {
    if (!this.validateEmail(this.state.email)) {
      Toast.show('Invalid Email Address');
    } else {
      var datas = {
        "args": [[], {
          'name': this.state.name,
          'profile_id': this.state.profile_id,
          'email': this.state.email,
          'phone': this.state.phone,
          'mobile': this.state.mobile,
          'website': this.state.website,
          'father_name': this.state.father_name,
          'mother_name': this.state.mother_name,
          'spouse_name': this.state.spouse_name,
          'date_of_birth': this.state.date_of_birth,
          'birth_place': this.state.birth_place,
          'occupation': this.state.occupation,
          'local_address': this.state.local_address,
          'permenent_address': this.state.permenent_address,
          'image': this.state.profile_resourcePath.data,
          'facebook': this.state.facebook,
          'youtube': this.state.youtube,
          'instagram': this.state.instagram,
          'twitter': this.state.twitter,
        }],
        "kwargs": {},
        "method": "create_contact_mobile",
        "model": "res.partner"
      }
      return api.callRPCmethod(datas).then(res => {
        if (res.data) {
          Toast.show('Successfully Saved');
          this.clearRecord();
        } else {
          this.clearRecord();
          Toast.show('Error');
        }
      });
    }
  }
  validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  render() {
    return (
      <View style={mainDivStyle}>
        <View style={subElStyle}>
          <View>
            <Text style={textBox.textLabel}>Application Form Number</Text>
            <TextInput
              style={textBox.inputText}
              placeholderTextColor="#003f5c"
              onChangeText={(profile_id) => this.setState({ profile_id })}
              value={this.state.profile_id} />
            {/* <Icon
    name='trash'
    color='#fb5b5a'
    size={20}
    style={{ alignItems: 'center', justifyContent: 'center',}}
  /> */}
          </View>
          <View>
            <Text style={textBox.textLabel}>Name</Text>
            <TextInput
              style={textBox.inputText}
              placeholderTextColor="#003f5c" onChangeText={(name) => this.setState({ name })}
              value={this.state.name} />
          </View>
          <View>
            <Text style={textBox.textLabel}>Email</Text>
            <TextInput
              style={textBox.inputText}
              placeholderTextColor="#003f5c" onChangeText={(email) => this.setState({ email })}
              value={this.state.email} />
          </View>
          <View>
            <Text style={textBox.textLabel}>Phone Number</Text>
            <TextInput
              style={textBox.inputText}
              placeholderTextColor="#003f5c" onChangeText={(phone) => this.setState({ phone })}
              value={this.state.phone} />
          </View>
          <View>
            <Text style={textBox.textLabel}>Mobile</Text>
            <TextInput
              style={textBox.inputText} keyboardType='numeric' maxLength={10}
              placeholderTextColor="#003f5c" onChangeText={(mobile) => this.setState({ mobile })}
              value={this.state.mobile} />
          </View>
          <View>
            <Text style={textBox.textLabel}>Website</Text>
            <TextInput
              style={textBox.inputText}
              placeholderTextColor="#003f5c" onChangeText={(website) => this.setState({ website })}
              value={this.state.website} />
          </View>
          <View>
            <Text style={textBox.textLabel}>Father Name</Text>
            <TextInput
              style={textBox.inputText}
              placeholderTextColor="#003f5c" onChangeText={(father_name) => this.setState({ father_name })}
              value={this.state.father_name} />
          </View>
          <View>
            <Text style={textBox.textLabel}>Mother Name</Text>
            <TextInput
              style={textBox.inputText}
              placeholderTextColor="#003f5c" onChangeText={(mother_name) => this.setState({ mother_name })}
              value={this.state.mother_name} />
          </View>
          <View>
            <Text style={textBox.textLabel}>Spouse Name</Text>
            <TextInput
              style={textBox.inputText}
              placeholderTextColor="#003f5c" onChangeText={(spouse_name) => this.setState({ spouse_name })}
              value={this.state.spouse_name} />
          </View>
          <View>
            <Text style={textBox.textLabel}>DOB</Text>
            <DatePicker
              style={textBox.inputText}
              date={this.state.date_of_birth}
              mode="date"
              placeholder="select date"
              format="DD-MM-YYYY"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateText: {
                  color: 'white',
                },
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0,
                  color: 'white'
                },
                dateInput: {
                  marginLeft: 36,
                  borderWidth: 0,
                  borderColor: "#444444",
                },
                // ... You can check the source to find the other keys.
              }}
              onDateChange={(date_of_birth) => { this.setState({ date_of_birth }) }}
            />
            {/* <TextInput
              style={textBox.inputText}
              placeholderTextColor="#003f5c" /> */}
          </View>
          <View>
            <Text style={textBox.textLabel}>Birth Palace</Text>
            <TextInput
              style={textBox.inputText}
              placeholderTextColor="#003f5c" onChangeText={(birth_place) => this.setState({ birth_place })}
              value={this.state.birth_place} />
          </View>
          <View>
            <Text style={textBox.textLabel}>Occupation</Text>
            <TextInput
              style={textBox.inputText}
              placeholderTextColor="#003f5c" onChangeText={(occupation) => this.setState({ occupation })}
              value={this.state.occupation} />
          </View>
          <View>
            <Text style={textBox.textLabel}>Permenent Address</Text>
            <TextInput
              style={textBox.inputText}
              placeholderTextColor="#003f5c" onChangeText={(permenent_address) => this.setState({ permenent_address })}
              value={this.state.permenent_address} />
          </View>
          <View>
            <Text style={textBox.textLabel}> Local Address</Text>
            <TextInput
              style={textBox.inputText}
              placeholderTextColor="#003f5c" onChangeText={(local_address) => this.setState({ local_address })}
              value={this.state.local_address} />
          </View>
          <View>
            <Text style={textBox.textLabel}> Facebook </Text>
            <TextInput
              style={textBox.inputText}
              placeholderTextColor="#003f5c" onChangeText={(facebook) => this.setState({ facebook })}
              value={this.state.facebook} />
          </View>
          <View>
            <Text style={textBox.textLabel}> Youtube </Text>
            <TextInput
              style={textBox.inputText}
              placeholderTextColor="#003f5c" onChangeText={(youtube) => this.setState({ youtube })}
              value={this.state.youtube} />
          </View>
          <View>
            <Text style={textBox.textLabel}> Twitter </Text>
            <TextInput
              style={textBox.inputText}
              placeholderTextColor="#003f5c" onChangeText={(twitter) => this.setState({ twitter })}
              value={this.state.twitter} />
          </View>
          <View>
            <Text style={textBox.textLabel}> Instagram </Text>
            <TextInput
              style={textBox.inputText}
              placeholderTextColor="#003f5c" onChangeText={(instagram) => this.setState({ instagram })}
              value={this.state.instagram} />
          </View>
          <View>
            <Text style={textBox.textLabel}>Profile Image</Text>
            <TouchableOpacity onPress={this.selectProfileFile} style={button}  >
              <Text style={buttonText}>Choose a file (Click me)</Text>
            </TouchableOpacity>
            <View>
              {renderIf(this.state.profile_resourcePath.data,

                <View style={{ flexDirection: 'row', alignContent: 'stretch' }}>
                  <View style={{ width: '10%' }}></View>
                  <View style={{ width: '50%' }}><Image
                    source={{
                      uri: 'data:image/jpeg;base64,' + this.state.profile_resourcePath.data,
                    }}
                    style={{ width: 100, height: 100 }}
                  />
                  </View>
                  <Text style={{ width: '40%', textAlignVertical: 'center' }}>
                    <Icon onPress={this.clearProfileFile}
                      name="trash"
                      color="#fb5b5a"
                      size={35}
                    >
                    </Icon>
                  </Text>
                </View>
              )}
            </View>
          </View>
          <View>
            <Text style={textBox.textLabel}>Select Aadhar Card</Text>
            <TouchableOpacity onPress={this.selectAdharFile} style={button}  >
              <Text style={buttonText}>Choose a file (Click me)</Text>
            </TouchableOpacity>
            <View>
              {renderIf(this.state.adhar_resourcePath.data,

                <View style={{ flexDirection: 'row', alignContent: 'stretch' }}>
                  <View style={{ width: '10%' }}></View>
                  <View style={{ width: '50%' }}><Image
                    source={{
                      uri: 'data:image/jpeg;base64,' + this.state.adhar_resourcePath.data,
                    }}
                    style={{ width: 100, height: 100 }}
                  />
                  </View>
                  <Text style={{ width: '40%', textAlignVertical: 'center' }}>
                    <Icon onPress={this.clearAdharFile}
                      name="trash"
                      color="#fb5b5a"
                      size={35}
                    >
                    </Icon>
                  </Text>
                </View>
              )}
            </View>
          </View>
          <View>
            <Text style={textBox.textLabel}>Select Passport</Text>
            <TouchableOpacity onPress={this.selectPassportFile} style={button}  >
              <Text style={buttonText}>Choose a file (Click me)</Text>
            </TouchableOpacity>
            <View>
              {renderIf(this.state.passport_resourcePath.data,

                <View style={{ flexDirection: 'row', alignContent: 'stretch' }}>
                  <View style={{ width: '10%' }}></View>
                  <View style={{ width: '50%' }}><Image
                    source={{
                      uri: 'data:image/jpeg;base64,' + this.state.passport_resourcePath.data,
                    }}
                    style={{ width: 100, height: 100 }}
                  />
                  </View>
                  <Text style={{ width: '40%', textAlignVertical: 'center' }}>
                    <Icon onPress={this.clearPassportFile}
                      name="trash"
                      color="#fb5b5a"
                      size={35}
                    >
                    </Icon>
                  </Text>
                </View>
              )}
            </View>
          </View>
          <View>
            <Text style={textBox.textLabel}>Select License</Text>
            <TouchableOpacity onPress={this.selectLicenceFile} style={button}  >
              <Text style={buttonText}>Choose a file (Click me)</Text>
            </TouchableOpacity>
            <View style={{ alignItems: 'center', justifyContent: 'center', }}>
              {renderIf(this.state.licence_resourcePath.data,
                <View style={{ flexDirection: 'row', alignContent: 'stretch' }}>
                  <View style={{ width: '10%' }}></View>
                  <View style={{ width: '50%' }}><Image
                    source={{
                      uri: 'data:image/jpeg;base64,' + this.state.licence_resourcePath.data,
                    }}
                    style={{ width: 100, height: 100 }}
                  />
                  </View>
                  <Text style={{ width: '40%', textAlignVertical: 'center' }}>
                    <Icon onPress={this.clearLicenceFile}
                      name="trash"
                      color="#fb5b5a"
                      size={35}
                    >
                    </Icon>
                  </Text>
                </View>
              )}
            </View>
          </View>
          <View>
            <Text style={textBox.textLabel}>Select voter ID card</Text>
            <TouchableOpacity onPress={this.selectVoterFile} style={button}  >
              <Text style={buttonText}>Choose a file (Click me)</Text>
            </TouchableOpacity>
            <View style={{ alignItems: 'center', justifyContent: 'center', }}>
              {renderIf(this.state.vater_resourcePath.data,

                <View style={{ flexDirection: 'row', alignContent: 'stretch' }}>
                  <View style={{ width: '10%' }}></View>
                  <View style={{ width: '50%' }}><Image
                    source={{
                      uri: 'data:image/jpeg;base64,' + this.state.vater_resourcePath.data,
                    }}
                    style={{ width: 100, height: 100 }}
                  />
                  </View>
                  <Text style={{ width: '40%', textAlignVertical: 'center' }}>
                    <Icon onPress={this.clearVoterCardFile}
                      name="trash"
                      color="#fb5b5a"
                      size={35}>
                    </Icon>
                  </Text>
                </View>
              )}
            </View>
          </View>
          <View>
            <Text style={textBox.textLabel}>Select Pan Card</Text>
            <TouchableOpacity onPress={this.selectPanFile} style={button}  >
              <Text style={buttonText}>Choose a file (Click me)</Text>
            </TouchableOpacity>
            <View style={{ alignItems: 'center', justifyContent: 'center', }}>
              {renderIf(this.state.pancard_resourcePath.data,
                <View style={{ flexDirection: 'row', alignContent: 'stretch' }}>
                  <View style={{ width: '10%' }}></View>
                  <View style={{ width: '50%' }}><Image
                    source={{
                      uri: 'data:image/jpeg;base64,' + this.state.pancard_resourcePath.data,
                    }}
                    style={{ width: 100, height: 100 }}
                  />
                  </View>
                  <View style={{ width: '40%', textAlignVertical: 'center' }}>
                    <Button transparent> <Icon onPress={this.clearPancardFile}
                      name="trash"
                      color="#fb5b5a"
                      size={35}
                    >
                    </Icon></Button>
                  </View>
                </View>
              )}
            </View>
          </View>
          {/* <Button color="#fb5b5a"
            title="Submit" onPress={() => props.goToPostPage('dashboard')}
          /> */}
          <TouchableOpacity style={submitBtn} onPress={() => this.createClient()}>
            <Text style={submitBtnText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>

    )
  }
}
export default ClientCreateForm;